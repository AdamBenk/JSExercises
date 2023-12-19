

export class RemoteCalculator {
    add(a, b) {
        return axios.get(
            'http://localhost:3004/add',
            {
                params: { a, b }
            }
        ).then((response) => {
            // implement error handling here

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
            // implement error handling here

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
            // implement error handling here

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
            // implement error handling here

            return response.data.result;
        });
    }

    /*

    task 1: refactor: only 1 function with axios.get, all the operators call it with proper params

    send(operator, a, b) {
        return axios.get(`http://localhost:3004/${operator}`, { a, b });

        // implement throw here;
    }

    add() {
        return this.send("add", a, b);
    }

    ...

    task 2: throw error if response.data.error is not empty

    */
}