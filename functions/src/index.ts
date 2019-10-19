import * as functions from 'firebase-functions';

export const score = functions.https.onRequest((request, response) => {
    response.send("Hello, this is the score function!");
});
