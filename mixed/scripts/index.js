import {Calculator} from "./render.calc.button.js";
//import {LocalCalculator} from "./calc.service.js";
import {RemoteCalculator} from "./remotecalc.service.js";
import axios from "axios";


window.addEventListener("load", () => {
    const container = document.querySelector(".btnContainer");
    const displayField = document.querySelector(".displayField");
    const calculatorService = new RemoteCalculator();
    const calculator = new Calculator(container, displayField, calculatorService);
    calculator.render();
    calculator.addBtnFill();
   

   /*sendRequest("+", 10, 12).then((response) =>{
        console.info(response);
    })*/

    /*const result = remotecalc.add('w', 3).then((result)=>{
        console.log("Eredmeny: ", result);
    }).catch(error => {
        console.info("ERROR", error);
    });*/

    
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