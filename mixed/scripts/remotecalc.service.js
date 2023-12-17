

export class RemoteCalculator {
    add(a, b) {
        return axios.get(
            'http://localhost:3004/add',
            {
                params: { a, b }
            }
        ).then((response) => {
            return response.data.result;
        });
    }

    subtract(a, b) {
        return axios.get(
            'http://localhost:3004/subtract',
            {
                params: { a, b }
            }
        ).then((response) => {
            return response.data.result;
        });
    }

    multiply(a, b) {
        return axios.get(
            'http://localhost:3004/multiply',
            {
                params: { a, b }
            }
        ).then((response) => {
            return response.data.result;
        });
    }

    divide(a, b) {
        return axios.get(
            'http://localhost:3004/divide',
            {
                params: { a, b }
            }
        ).then((response) => {
            return response.data.result;
        });
    }
}