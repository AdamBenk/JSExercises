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

        /*
          task 1:
            verify whether a and b is number
            if either a or b is not a number then send back an error message
            write a sendError(message) function, that sends back the following structure:
            {
                error: message
            }

            ! set content type header
            ! no need to json.stringify object in express js is content type is set

          task 2:
            process error message in browser (client side):

            if response.data.error is not undefined then throw an error (use throw statement)


          test: DOD:
              if you provide wrong data, then client must throw an error with the error message from the server
        */


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

