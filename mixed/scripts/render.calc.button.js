export class Calculator {
    container;
    display;
    calculatorService;
    stencils = [7, 8, 9, "&#247", "&#177", 4, 5, 6, "x", "&#8730", 1, 2, 3, "-", "%", 0, ".", "C", "+", "="];
    currentNumber = ""; // string;
    number1 = "0"; // string
    number2 = ""; // string
    operator = ""; // string

    constructor(container, display, calculatorService) {
        this.container = container;
        this.display = display;
        this.calculatorService = calculatorService; 
    }

    render() {
        let allBtns = ""; 
        for (let i = 0; i < this.stencils.length; i++) {
            allBtns += `<button class="calcBtn">${this.stencils[i]}</button>`
            this.container.innerHTML = allBtns;
        }
        this.display.value = "0";
    }

    addBtnFill() {
        const calcBtns = this.container.querySelectorAll(".calcBtn"); 
        
        for (let i = 0; i < calcBtns.length; i++) {
            
            switch(calcBtns[i].innerHTML) {
                case "C":
                    calcBtns[i].classList.add("specBtn");
                    break;
                case "=":
                    calcBtns[i].classList.add("specBtn");
                    break;
                case "±":
                    calcBtns[i].classList.add("specBtn");
                    break;
                case ".":
                    calcBtns[i].classList.add("noBtn");
                    break;
            }

            switch(!isNaN(calcBtns[i].innerHTML)) {
                case true:
                    calcBtns[i].classList.add("noBtn");
                    break;
                case false:
                    this.findOperator(calcBtns[i]);
                    break;
            }
        }

        const opBtns = this.container.querySelectorAll(".operatorBtn"); 
        const noBtns = this.container.querySelectorAll(".noBtn"); 
        const specBtns = this.container.querySelectorAll(".specBtn"); 
        
        noBtns.forEach(element => {
            element.addEventListener("click", () => {
                this.addCharToCurrent(element.innerHTML);
                this.setDisplay(element.innerHTML);
            })
        })
        
        opBtns.forEach(element => {
            element.addEventListener("click", () => {
                this.storeNumber();
                this.setOperator(element.innerHTML);
            })
        })

        specBtns.forEach(element => {
            element.addEventListener("click", () => {
                switch(element.innerHTML) {
                    case "±":
                        this.changePlusMinus();
                        break;
                    case "C":
                        this.clearAll();
                        break;
                    case "=":
                        this.calcResult();
                        break;
                }
            })
        })
    }

    findOperator(element) {
        if (element.innerHTML !== "." && element.innerHTML !== "C" && element.innerHTML !== "=" && element.innerHTML !== "±") {
            element.classList.add("operatorBtn");
        }
    }

    clearAll() {
        this.number1 = "0"; 
        this.display.value = "0"; 
        this.currentNumber = "";
        this.operator = "";
        this.number2 = "";
        // clears all numbers and operators to ""
    }

    changePlusMinus() {
        if (this.number1 !== "0") {
            this.number1 = this.number1 * -1;
            this.setDisplay(this.number1);
        }
        if (this.currentNumber !== "") {
            this.currentNumber = parseInt(this.currentNumber) * -1;
            this.display.value = "";
            this.setDisplay(this.currentNumber);
        }
    }

    addCharToCurrent(key /*character*/) { // called when a number or . pressed
        this.currentNumber += key;
        // adds the key to the end of the currentNumber
    }

    setDisplay(char) {
        if (this.currentNumber.length < 2) {
            this.display.value = "";
        }
        this.display.value += char;
    }

    storeNumber() {
        if (this.operator === "" && this.currentNumber !== "") {
            this.number1 = this.currentNumber; 
            this.currentNumber = "";
        } 
        if (this.operator !== "" ) {
            this.number2 = this.currentNumber;
            this.currentNumber = "";
            this.callService().then(result => {
                this.number1 = result;
                this.display.value = result;
            });
        } 
    }

    setOperator(key) {
        this.operator = key; 
        
        // if number1 not exist
            // key -> operator
            // currentNumber = ""
    }

    calcResult() {
        this.number2 = this.currentNumber;
        this.callService().then(result => {
            this.number1 = result;
            this.display.value = result;
            this.currentNumber = "";
            this.operator = "";
            this.number2 = "";
        });
    }

    callService() {
        console.log("Callservice:", this.operator, this.number1, this.number2)
        switch(this.operator) {
            case "+": 
                return this.calculatorService.add(this.number1, this.number2);
            case "-": 
                return this.calculatorService.subtract(this.number1, this.number2);
            case "x": 
                return this.calculatorService.multiply(this.number1, this.number2);
            case "÷": 
                return this.calculatorService.divide(this.number1, this.number2);
        }
    }
}