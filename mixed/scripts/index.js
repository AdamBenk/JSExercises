import {LocalCalculator} from "./calc.service.js";

const calculator = new LocalCalculator();

const result = calculator.add(1,3);

console.info("Add:", result);