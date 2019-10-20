export interface ScoreResult {
    result: any;
}

export interface ScoreBody {
    address: string;
    image: string;
    callback: (result?: ScoreResult) => void;
}

export const computeScore = (submission: ScoreBody) => {
    const xhr = new XMLHttpRequest();

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
        submission.callback(xhr.response);
    });

    xhr.addEventListener('error', () => {
        submission.callback(undefined);
    });

    // open the request with the verb and the url
    xhr.open('POST', window.location.protocol + '//' + window.location.host + '/api/score');

    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

    // send the request
    xhr.send(JSON.stringify({
        address: submission.address,
        image: submission.image,
    }));
};
