import express from 'express';
import bodyParser from "express";

const app = express();
const port = 3004;

app.use(bodyParser.json()); // Middleware to parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

initServer();

function initServer() {
    app.get("/", (req, res) => {
        sendResult("ALIVE", res);
    })

    app.get("/add", (req, res) => {
        const [a,b ] = getParams(req);
        const result = a + b;

        if (checkIsNaN(a,b)) {
            sendError("Either a or b is not a number", res);
        } else {
            sendResult(result, res);
        }
    });

    app.get("/subtract", (req, res) => {
        const [a,b ] = getParams(req);
        const result = a - b;

        if (checkIsNaN(a,b)) {
            sendError("Either a or b is not a number", res);
        } else {
            sendResult(result, res);
        }
    });

    app.get("/multiply", (req, res) => {
        const [a,b ] = getParams(req);
        const result = a * b;

        if (checkIsNaN(a,b)) {
            sendError("Either a or b is not a number", res);
        } else {
            sendResult(result, res);
        }
    });

    app.get("/divide", (req, res) => {
        const [a,b ] = getParams(req);
        const result = a / b;

        if (checkIsNaN(a,b)) {
            sendError("Either a or b is not a number", res);
        } else if (b === 0) {
            sendError("Division by zero");
        } else {
            sendResult(result, res);
        }
    });

    app.listen(port, () => {
        console.log(`http server is listening on port ${port}`);
    });
}

function checkIsNaN(a,b) {
    return (isNaN(a) || isNaN(b));
}

function sendResult(result, res) {
    res.setHeader("Content-Type", "application/json").status(200).send({ result });
}

function sendError(errorMsg, res) {
    res.setHeader("Content-Type", "application/json").status(400).send({ error: errorMsg });
}

function getParams(req) {
    const a = parseInt(req.query["a"]);
    const b = parseInt(req.query["b"]);

    return [a, b];
}