import express from 'express';
import bodyParser from "express";

const app = express();
const port = 3002;

app.use(bodyParser.json()); // Middleware to parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

initServer();

function initServer() {
    console.info("route added: GET /");
    app.get('/', (req, res) => res.send('alive'))

    console.info("route added: POST /login");
    app.get('/login', (req, res) => {
        const rnd = Math.random();
        const username = req.query.username;
        const password = req.query.password;

        if (rnd < 0.5) { login(username, password, res); return; }

        if (rnd < 0.8) { timeout(req, res); return; }
        if (rnd < 1)   { error(req, res); return; }
    });

    app.post('/login', (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        login(username, password, res);
    });

    app.get('/404', (req, res) => {
        res.status(400);
    });

    app.listen(port, () => {
        console.log(`http server is listening on port ${port}`);
    });
}

function login(username, password, res) {
    console.info("> login");

    if (username === "admin" && password === "admin") {
        console.info("> login successful");
        sendJSONResponse(res, { message: "Login successful" });
    } else {
        console.info("> login failed");
        sendErrorResponse(res, "Login failed", 401);
    }
}

function timeout(req, res) {
    console.info("> login timeout");
    setTimeout(() => {

        login(req, res);
    }, 5000);
}

function error(req, res) {
    console.info("> internal server error");
    sendErrorResponse(res, "Internal server error", 500);
}


function sendJSONResponse(res, obj) {
    res.set('Content-Type', 'application/json');
    res.set('Access-Control-Allow-Methods', 'OPTIONS,GET,HEAD,POST,PUT,DELETE');
    res.send(JSON.stringify(obj));
}

function sendErrorResponse(res, message, errNo = 400) {
    res.status(errNo);
    sendJSONResponse(res, { message });
}
