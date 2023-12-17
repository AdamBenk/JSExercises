export class CalcButton {
    container;
    stencils;
    display;

    currentNumber = ""; // string;
    number1 = ""; // string
    number2 = ""; // string
    operator = ""; // string

    constructor(container, stencils, display) {
        this.container = container;
        this.stencils = stencils;
        this.display = display;
    }

    render() {
        let allBtns = ""; 
        for (let i = 0; i < this.stencils.length; i++) {
            allBtns += `<button class="calcBtn">${this.stencils[i]}</button>`
            this.container.innerHTML = allBtns;
        }
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
                opBtns.forEach(element => {
                    element.removeAttribute("disabled");
                }); 
                this.display.value += element.innerHTML;
                this.addCharToCurrent(element.innerHTML);
                console.info("pushed number button")
            })
        })
        
        opBtns.forEach(element => {
            element.addEventListener("click", () => {
                this.display.value += element.innerHTML;
                this.closeNumber1(this.currentNumber);
                this.setOperator(element.innerHTML);
                opBtns.forEach((element) => {
                    element.setAttribute("disabled", "");
                });
            })
        })

        specBtns.forEach(element => {
            element.addEventListener("click", () => {
                switch(element.innerHTML) {
                    case "C":
                        this.clearAll();
                        break;
                    case "=":
                        this.closeNumer2(this.currentNumber);
                        element.dispatchEvent(new CustomEvent("sendAB", { detail: [this.operator, this.number1, this.number2] }));
                        break;
                }
            })
        })
    }

    findOperator(element) {
        if (element.innerHTML !== "." && element.innerHTML !== "C" && element.innerHTML !== "=") {
            element.classList.add("operatorBtn");
        }
    }

    clearAll() {
        this.display.value = ""; 
        this.currentNumber = "";
        this.number1 = ""; 
        this.operator = "";
        this.number2 = "";
        // clears all numbers and operators to ""
    }

    addCharToCurrent(key /*character*/) { // called when a number or . pressed
        this.currentNumber += key;
        console.info("currentnumber:", this.currentNumber)
        
        // adds the key to the end of the currentNumber
    }

    closeNumber1(current) {
        this.number1 = current; 
        console.info("number1:", this.number1)
    }


    setOperator(key) {
        this.operator = key; 
        this.currentNumber = ""; 
        
        // if number1 not exist
            // key -> operator
            // currentNumber = ""
    }

    closeNumer2(current) {
        this.number2 = current; 
    }
}