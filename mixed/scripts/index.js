import {CalcButton} from "./render.calc.button.js";
import {LocalCalculator} from "./calc.service.js";
import {RemoteCalculator} from "./remotecalc.service.js";
import axios from "axios";


window.addEventListener("load", () => {
    const container = document.querySelector(".btnContainer");
    const stencils = [7, 8, 9, "&#247", "&#177", 4, 5, 6, "x", "&#8730", 1, 2, 3, "-", "%", 0, ".", "C", "+", "="];
    //const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ".", "C"];
    //const operators = ["&#247", "&#177", "x", "&#8730", "-", "%", "+", "="];
    const displayField = document.querySelector(".displayField");

    const calcButtons = new CalcButton(container, stencils, displayField);
    calcButtons.render();
    calcButtons.addBtnFill();

    const calculator = new RemoteCalculator();
    const result = calculator.multiply("x",3).then((result)=>{
        console.log("Eredmeny: ", result);
    });

    /*const remoteCalculator = new RemoteCalculator();
    remoteCalculator.addEventListener("sendAB", (event) => {
        sendRequest(event.detail[0], event.detail[1], event.detail[2], displayField) 
    })*/

    /*sendRequest("+", 10, 12).then((response) =>{
        console.info(response);
    })*/
});

function sendRequest(operation, a, b) {
    let url;

    switch(operation) {
        case "+": default: url = "add"; break;
        case "-": url = "subtract"; break;
        case "*": url = "multiply"; break;
        case "/": url = "divide"; break;
    }

    return axios.get("http://localhost:3004/" + url, { params: { a, b } });
}