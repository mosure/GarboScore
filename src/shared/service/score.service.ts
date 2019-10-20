export interface ScoreResult {
    result: any;
}

export interface ScoreBody {
    address: string;
    image: string;
    callback: (result: ScoreResult) => void;
}

export const computeScore = (submission: ScoreBody) => {
    const xhr = new XMLHttpRequest();

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
        submission.callback(xhr.response);
    });

    // open the request with the verb and the url
    xhr.open('POST', window.location.protocol + '//' + window.location.host + '/api/score');

    // send the request
    xhr.send(JSON.stringify({
        address: submission.address,
        image: submission.image,
    }));
};
