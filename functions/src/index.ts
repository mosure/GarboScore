import * as functions from 'firebase-functions';
import { MongoClient, Db } from 'mongodb';
const automl = require('@google-cloud/automl');

const MONGODB_URL: string = process.env.MONGODB_URL || '';
const MONGODB_NAME: string = process.env.MONGODB_NAME || '';

const COLLECTION_NAME = 'addresses';

const PROJECT_NAME: string = process.env.GCP_PROJECT_NAME || '';
const REGION = process.env.GCP_REGION || '';
const AUTO_ML_MODEL = process.env.AUTO_ML_MODEL || '';

const predictionClient = new automl.PredictionServiceClient();

const mongoClient = new MongoClient(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const recyclables = ['glass', 'plastic', 'metal'];
const threshold = 0.5;

const getMongoDB = (callback: (db?: Db) => void) => {
    mongoClient.connect((err) => {
        if (err) {
            callback();
            return;
        }

        const db = mongoClient.db(MONGODB_NAME);

        callback(db);
      
        mongoClient.close().then(() => console.log('CLOSED')).catch((error) => console.log('ERROR Closing: ' + JSON.stringify(error)));
    });
};

const callAutoMLAPI = (b64img: string) => {
    return new Promise((resolve, reject) => {
        const payload = {
            'image': {
                'imageBytes': b64img,
            },
        };

        const reqBody = {
            name: predictionClient.modelPath(PROJECT_NAME, REGION, AUTO_ML_MODEL),
            payload: payload,
        };

        predictionClient.predict(reqBody)
        .then((responses: any) => {
            resolve(responses);
        })
        .catch((err: any) => {
            reject(err);
        });
    });  
};

const processResults = (results: any): number => {
    let count = 0;

    if (results) {
        for (const result of results) {
            if (result) {
                for (const item of result.payload) {
                    if (recyclables.indexOf(item.displayName) !== -1) {
                        if (item.imageObjectDetection.score > threshold) {
                            count++;
                        }
                    }
                }
            }
        } 
    }

    return count;
};

export const score = functions.https.onRequest((request, response) => {
    if (request.method !== 'POST') {
        response.status(404).send('Use a POST instead!');
        return;
    }

    if (request.body === undefined) {
        response.status(400).send('Body is undefined');
    }

    if (request.body.address === undefined || request.body.image === undefined) {
        response.status(400).send('Format: { address: string, image: string }');
        return;
    }

    callAutoMLAPI(request.body.image).then((results: any) => {
        const submissionScore = processResults(results);

        getMongoDB((db?: Db) => {
            if (!db) {
                response.status(500).send('Could not connect to MongoDB.');
                return;
            }
    
            const collection = db.collection(COLLECTION_NAME);

            collection.findOne({ address: request.body.address }).then((existing) => {
                if (existing) {
                    collection.updateOne({
                        address: request.body.address,
                    }, {
                        '$addToSet': {
                            evaluations: {
                                timestamp: Date.now(),
                                score: submissionScore,
                            },
                        },
                    }).then(() => {
                        response.status(202).send({ score: submissionScore });
                    }).catch((err) => response.status(500).send({ error: err }));
                } else {
                    collection.insertOne({
                        address: request.body.address,
                        evaluations: [
                            {
                                timestamp: Date.now(),
                                score: submissionScore,
                            },
                        ],
                    }).then(() => {
                        response.status(201).send({ score: results });
                    }).catch((err) => response.status(500).send({ error: err }));
                }
            }).catch((err) => response.status(500).send({ error: err }));
        });
    }).catch((err) => response.status(500).send({ error: err }));
});

export const addresses = functions.https.onRequest((request, response) => {
    if (request.method !== 'GET') {
        response.status(404).send('Use a GET instead!');
        return;
    }

    const skip = request.query.skip || 0;
    const limit = request.query.limit || 10;

    
});
