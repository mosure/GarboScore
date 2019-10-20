export interface ScoreResult {
    result: any;
    score: number;
}

export interface ScoreBody {
    address: string;
    image: string;
}

export interface AddressResult {
    address: string;
    totalScore: number;
    count: number;
}

export const computeScore = (submission: ScoreBody): Promise<ScoreResult> => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        // get a callback when the server responds
        xhr.addEventListener('load', () => {
            resolve(xhr.response);
        });

        xhr.addEventListener('error', () => {
            reject();
        });

        // open the request with the verb and the url
        xhr.open('POST', window.location.protocol + '//' + window.location.host + '/api/score');

        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

        // send the request
        xhr.send(JSON.stringify({
            address: submission.address,
            image: submission.image,
        }));
    });
};

export const getAddresses = (skip?: number, limit?: number): Promise<AddressResult[]> => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        // get a callback when the server responds
        xhr.addEventListener('load', () => {
            resolve(xhr.response);
        });

        xhr.addEventListener('error', () => {
            reject();
        });

        let queryParams = '';

        if (skip) {
            queryParams = '?skip=' + skip;

            if (limit) {
                queryParams += '&limit=' + limit;
            }
        } else if (limit) {
            queryParams = '?limit=' + limit;
        }

        // open the request with the verb and the url
        xhr.open('GET', window.location.protocol + '//' + window.location.host + '/api/addresses' + queryParams);

        // send the request
        xhr.send();
    });
};
