import {Calculator} from "./render.calc.button.js";
import {RemoteCalculator} from "./remotecalc.service.js";

window.addEventListener("load", onLoad);

function onLoad() {
    const container = document.querySelector(".btnContainer");
    const displayField = document.querySelector(".displayField");
    const calculatorService = new RemoteCalculator();
    const calculator = new Calculator(container, displayField, calculatorService);

    calculator.render();
}