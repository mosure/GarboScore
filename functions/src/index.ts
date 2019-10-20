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
            console.log('Got a prediction from AutoML API!', JSON.stringify(responses));
            resolve(responses);
        })
        .catch((err: any) => {
            console.log('AutoML API Error: ', err);
            reject(err);
        });
    });  
};

export const score = functions.https.onRequest((request, response) => {
    if (request.method !== 'POST') {
        response.status(200).send('Use a POST instead!');
        return;
    }

    if (!request.body['address'] || !request.body['image']) {
        response.status(400).send(request.body);
        return;
    }

    callAutoMLAPI(request.body['image']).then((results: any) => {
        const submissionScore = results.length;

        getMongoDB((db?: Db) => {
            if (!db) {
                response.status(500).send('Could not connect to MongoDB.');
                return;
            }
    
            const collection = db.collection(COLLECTION_NAME);
    
            collection.updateOne({
                address: request.body['address'],
            }, {
                '$set': {
                    address: request.body['address'],
                    score: submissionScore,
                },
            }, {
                upsert: true,
            }).then(() => {
                response.status(201).send({ score: results });
            }).catch((err) => response.status(500).send({ error: err }));
        });
    }).catch((err) => response.status(500).send({ error: err }));
});
