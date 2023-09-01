import { SQLite3Storage } from './SQLite3Storage.js';
import express from 'express';
import bodyParser from "express";

const app = express();
const port = 3002;

app.use(bodyParser.json()); // Middleware to parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

const storage = new SQLite3Storage(
    "books",
    {
        "title": "VARCHAR(255)",
        "author": "VARCHAR(64)",
        "isbn": "VARCHAR(24)",
        "publicationYear": "INTEGER",
        "pages": "INTEGER",
        "status": "VARCHAR(24)",
        "publisher": "VARCHAR(128)",
        "genre": "VARCHAR(64)",
        "language": "VARCHAR(32)",
        "price": "REAL",
        "oldPrice": "REAL",
        "rating": "REAL",
        "cover": "TEXT",
        "shortDescription": "TEXT",
        "longDescription": "TEXT"
    },
    initServer
);

function initServer() {
    console.info("route added: GET /");
    app.get('/', (req, res) => res.send('alive'))

    console.info("route added: GET /book/list");
    app.get('/book/list', (req, res) => {
        try {
            storage.getAll((err, books) => {
                console.info("books", books);
                sendJSONResponse(res, books);
            });
        } catch(e) {
            sendErrorResponse(res, 400, e.message);
        }
    });

    console.info("route added: GET /book/:isbn");
    app.get('/book/:isbn', (req, res) => {
        try {
            storage.getBy("isbn", req.body.isbn, (err, book) => {
                console.info("books", book);
                sendJSONResponse(res, book);
            });
        } catch(e) {
            sendErrorResponse(res, 400, e.message);
        }
    });


    // creates a new entry in the database
    console.info("route added: PUT /book/:isbn");
    app.post('/book/:isbn', (req, res) => {
        try {
            console.info("create new book");
            console.info(typeof req.body, req.body);

            storage.create(createObjFromRequest(req), (err, books) => {
                storage.getAll((err, books) => {
                    console.info("getting all books", books)
                    sendJSONResponse(res, books);
                });
            });
        } catch(e) {
            sendErrorResponse(res, 400, e.message);
        }

    });

    // updates an existing entry in the database
    console.info("route added: POST /book/:isbn");
    app.put('/book/:isbn', (req, res) => {
        try {
            console.info("update book", req.body);
            storage.update(req.params.isbn, createObjFromRequest(req), (err, books) => {
                storage.getAll((err, books) => {
                    console.info("getting all books", books)
                    sendJSONResponse(res, books);
                });
            });
        } catch(e) {
            sendErrorResponse(res, 400, e.message);
        }
        
    });

    console.info("route added: DELETE /book/:isbn");
    app.delete('/book/:isbn', (req, res) => {
        try {
            console.info("delete book", req.params.isbn);

            storage.delete(req.params.isbn, (err, books) => {
                storage.getAll((err, books) => {
                    sendJSONResponse(res, books);
                });
            });
        } catch(e) {
            sendErrorResponse(res, 400, e.message);
        }
    });

    app.options('*', (req, res) => {
        res.set('Access-Control-Allow-Methods', 'OPTIONS,GET,HEAD,POST,PUT,DELETE');
        res.send();
    });

    app.listen(port, () => {
        console.log(`Bookstore server is listening on port ${port}`)
    });
}

function sendJSONResponse(res, obj) {
    res.set('Content-Type', 'application/json');
    res.set('Access-Control-Allow-Methods', 'OPTIONS,GET,HEAD,POST,PUT,DELETE');
    res.send(JSON.stringify(obj));
}

function sendErrorResponse(res, errNo, message) {
    res.status(400);
    sendJSONResponse(res, { message });
}

function createObjFromRequest(req) {
    return {
        "title": req.body.title,
        "author": req.body.author,
        "isbn": req.body.isbn,
        "publicationYear": req.body.publicationYear,
        "pages": req.body.pages,
        "status": req.body.status,
        "publisher": req.body.publisher,
        "genre": req.body.genre,
        "language": req.body.language,
        "price": req.body.price,
        "oldPrice": req.body.oldPrice,
        "rating": req.body.rating,
        "cover": req.body.cover,
        "shortDescription": req.body.shortDescription,
        "longDescription": req.body.longDescription
    };
}