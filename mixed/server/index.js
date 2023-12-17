import express from 'express';
import bodyParser from "express";

const app = express();
const port = 3004;

app.use(bodyParser.json()); // Middleware to parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

initServer();

function initServer() {
    app.get('/add', (req, res) => {
        const a = req.query.number1;
        const b = req.query.number2;
        const result = a + b;
        sendJSONResponse(res, { result });
    })

    
    app.get('/substract', (req, res) => {
        const a = req.query.number1;
        const b = req.query.number2;
        const result = a - b;
        sendJSONResponse(res, { result });
    });

    app.get('/mulitiply', (req, res) => {
        const a = req.query.number1;
        const b = req.query.number2;
        const result = a / b;
        sendJSONResponse(res, { result });
    });

    app.get('/divide', (req, res) => {
        const a = req.query.number1;
        const b = req.query.number2;
        const result = a * b;
        sendJSONResponse(res, { result });
    });
}
