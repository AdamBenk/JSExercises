export class CalcButton {
    containerNumbers;
    containerOperators;
    numbers;
    operators;
    display;
    constructor(containerNumbers, numbers, containerOperators, operators, display) {
        this.containerNumbers = containerNumbers;
        this.numbers = numbers;
        this.containerOperators = containerOperators;
        this.operators = operators;
        this.display = display;
    }

    renderNumbers() {
        let allNumberBtns = ""; 
        for (let i = 0; i < this.numbers.length; i++) {
            allNumberBtns += `<button class="numberBtn">${this.numbers[i]}</button>`
            this.containerNumbers.innerHTML = allNumberBtns;
        }
    }

    renderOperators() {
        let allOperatorBtns = ""; 
        for (let i = 0; i < this.operators.length; i++) {
            allOperatorBtns += `<button class="operatorBtn">${this.operators[i]}</button>`
            this.containerOperators.innerHTML = allOperatorBtns;
        }
    }

    addBtnFill() {
        const noBtns = this.containerNumbers.querySelectorAll(".numberBtn"); 
        console.info(noBtns)
        for (let i = 0; i < noBtns.length; i++) {
            if (noBtns[i].innerHTML === "C") {
                noBtns[i].addEventListener("click", () => {
                    this.display.innerHTML = ""; 
            })} else {
                noBtns[i].addEventListener("click", () => {
                    console.info("1st", this.display.innerHTML)
                    this.display.innerHTML += noBtns[i].innerHTML;
                    console.info("2nd", this.display.innerHTML);
                })
            }
        }

        const opBtns = this.containerOperators.querySelectorAll(".operatorBtn"); 
        for (let i = 0; i < opBtns.length; i++) {
            opBtns[i].addEventListener("click", () => {
                    this.display.innerHTML += opBtns[i].innerHTML;
                    console.info("3rd", this.display.innerHTML);
                })
        }
    }
}