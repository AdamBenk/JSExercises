
export class RemoteCalculator {
    add(a, b, display) {
        axios({
            method: 'get',
            url: 'http://localhost:3000/add',
            data: {
                number1: a,
                number2: b
              }
          })
            .then((response) => {
                const result = JSON.parse(response)
                display.value = result; 
            });
    }

    subtract(a, b) {
        axios({
            method: 'get',
            url: 'http://localhost:3000/subtract',
            data: {
                number1: a,
                number2: b
              }
          })
            .then((response) => {
                const result = JSON.parse(response)
                display.value = result; 
            });
    }

    multiply(a, b) {
        axios({
            method: 'get',
            url: 'http://localhost:3000/multiply',
            data: {
                number1: a,
                number2: b
              }
          })
            .then((response) => {
                const result = JSON.parse(response)
                display.value = result; 
            });
    }

    divide(a, b) {
        axios({
            method: 'get',
            url: 'http://localhost:3000/divide',
            data: {
                number1: a,
                number2: b
              }
          })
            .then((response) => {
                const result = JSON.parse(response)
                display.value = result; 
            });
    }
}