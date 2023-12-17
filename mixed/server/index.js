import express from 'express';
import bodyParser from "express";

const app = express();
const port = 3004;

app.use(bodyParser.json()); // Middleware to parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

initServer();

function initServer() {
    app.get('/add', (req, res) => {
        const a = req.query.a;
        const b = req.query.b;

        const result = a + b;
        sendJSONResponse(res, { result });
    })

    
    app.get('/substract', (req, res) => {
        const a = req.query.a;
        const b = req.query.b;

        const result = a - b;
        sendJSONResponse(res, { result });
    });

    app.get('/multiply', (req, res) => {
        const a = req.query.a;
        const b = req.query.b;

        const result = a * b;
        sendJSONResponse(res, { result });
    });

    app.get('/divide', (req, res) => {
        const a = req.query.a;
        const b = req.query.b;

        const result = a / b;
        sendJSONResponse(res, { result });
    });

    app.listen(port, () => {
        console.log(`Express is listening on port ${port}`);
    });
}
function sendJSONResponse(res, data) {
    res.setHeader("Content-type", "application/json");
    res.send(data);
}