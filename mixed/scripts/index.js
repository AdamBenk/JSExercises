import {CalcButton} from "./render.calc.button.js";
import {LocalCalculator} from "./calc.service.js";
import axios from "axios";


window.addEventListener("load", () => {
    const numberBtnContainer = document.querySelector(".numberBtnContainer");
    const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".", "C"];
    const operatorBtnContainer = document.querySelector(".operatorBtnContainer");
    const operators = ["&#247", "&#177", "x", "&#8730", "-", "%", "+", "="];
    const displayField = document.querySelector(".displayField");

    const calcButtons = new CalcButton(numberBtnContainer, numbers, operatorBtnContainer, operators, displayField);
    calcButtons.renderNumbers();
    calcButtons.renderOperators();
    calcButtons.addBtnFill();

    const calculator = new LocalCalculator();
    const result = calculator.add(1,3);

    sendRequest("+", 10, 12).then((response) =>{
        console.info(response);
    })
});


function sendRequest(operation, a, b) {
    let url;

    switch(operation) {
        case "+": default: url = "add"; break;
        case "-": url = "subtract"; break;
        case "*": url = "multiply"; break;
        case "/": url = "divide"; break;
    }

    return axios("http://localhost:3004/" + url, { a, b });
}