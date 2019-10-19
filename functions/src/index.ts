import * as functions from 'firebase-functions';
import { MongoClient, Db } from 'mongodb';

const MONGODB_URL: string = process.env.MONGODB_URL || '';
const MONGODB_NAME: string = process.env.MONGODB_NAME || '';

const COLLECTION_NAME = 'addresses';

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

export const score = functions.https.onRequest((request, response) => {
    if (request.method !== 'POST') {
        response.status(200).send('Use a POST instead!');
        return;
    }

    if (!request.body['address'] || !request.body['image']) {
        response.status(400).send('Body must be of type: { address: string, image: string }');
        return;
    }

    // TODO: Get a score from the ML
    // This should either be an array of scores or cumulative score
    const submissionScore = 0;

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
            response.status(201).send({ score: submissionScore });
        }).catch((err) => response.status(500).send({ error: err }));
    });
});
