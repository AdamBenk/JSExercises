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
    app.get('/', (req, res) => res.send('alive'))

    app.get('/book/list', (req, res) => {
        try {
            storage.getAll((err, books) => {
                sendJSONResponse(res, books);
            });
        } catch(e) {
            sendErrorResponse(res, 400, e.message);
        }
    });

    app.get('/book/:isbn', (req, res) => {
        try {
            storage.getBy("isbn", req.body.isbn, (err, books) => {
                sendJSONResponse(res, books);
            });
        } catch(e) {
            sendErrorResponse(res, 400, e.message);
        }

    });

    app.put('/book/:isbn', (req, res) => {
        try {
            console.info("create new book");
            console.info(typeof req.body, req.body);

            storage.create(createObjFromRequest(req), (err, books) => {
                sendOKResponse(res, "book created");
            });
        } catch(e) {
            sendErrorResponse(res, 400, e.message);
        }

    });

    app.post('/book/:isbn', (req, res) => {
        try {
            storage.update(req.params.isbn, createObjFromRequest(req), (err, books) => {
                sendOKResponse(res, "book updated");
            });
        } catch(e) {
            sendErrorResponse(res, 400, e.message);
        }
        
    });

    app.delete('/book/:isbn', (req, res) => {
        try {
            console.info("delete book", req.params.isbn);
            storage.delete(req.params.isbn, (err, books) => {
                sendOKResponse(res, "book deleted" );
            });
        } catch(e) {
            sendErrorResponse(res, 400, e.message);
        }

    });

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    });
}

function sendJSONResponse(res, obj) {
    res.set('Content-Type', 'application/json');
    res.send(JSON.stringify(obj));
}

function sendOKResponse(res, message) {
    res.status(200);
    sendJSONResponse(res, { message });
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