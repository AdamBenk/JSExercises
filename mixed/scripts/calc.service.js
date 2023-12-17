
export class LocalCalculator {
    add(a, b) {
        return new Promise((resolve, reject) => {
            if (isNaN(a) || isNaN(b)) {
                reject("Either a or b is not a number");
            }
            resolve(a + b);
        });
    }

    subtract(a, b) {
        return new Promise((resolve, reject) => {
            if (isNaN(a) || isNaN(b)) {
                reject("Either a or b is not a number");
            }
            resolve(a - b);
        });
    }

    multiply(a, b) {
        return new Promise((resolve, reject) => {
            if (isNaN(a) || isNaN(b)) {
                reject("Either a or b is not a number");
            }
            resolve(a * b);
        });
    }

    divide(a, b) {
        return new Promise((resolve, reject) => {
            if (isNaN(a) || isNaN(b)) {
                reject("Either a or b is not a number");
            }

            if (b === 0) {
                reject("Division by zero");
            }
            resolve(a - b);
        });
    }
}