

export class RemoteCalculator {
    add(a, b) {
        return this.send("add", a, b);
    }
    subtract(a, b) {
        return this.send("subtract", a, b);
    }
    multiply(a, b) {
        return this.send("multiply", a, b);
    }
    divide(a, b) {
        return this.send("divide", a, b);
    }
    
    send(operator, a, b) {
        return axios.get(`http://localhost:3004/${operator}`, { 
            params: { a, b }
        })
        .then(response => response.data.result).catch(() => {
            throw new Error("Failed at axios");
        })
    }
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