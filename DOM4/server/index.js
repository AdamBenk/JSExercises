import { Storage } from './storage.js';
import express from 'express';
import * as books  from './data/books.json' assert { type: "json" };

const app = express();
const port = 3001;

const storage = new Storage(
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
    /*const allBooks = books.default.books;
    allBooks.forEach(function (book) {
        storage.create(book, (err)=> { console.info("done", book.title); });
    });*/

    app.get('/', (req, res) => res.send('Hello World!'))

    app.get(
        '/cicamica',
        (req, res) => {
            const searchStr = req.query.search;
            return res.send('cicamica keres: ' +searchStr);
        }
    );


    app.get('/book/list', (req, res) => {
        res.set('Content-Type', 'application/json');
        storage.getAll((err, books) => {
            res.send(books);
        });
    });

    app.get('/book/:isbn', (req, res) => {

        res.set('Content-Type', 'application/json');
        res.send("{}");
        console.info("get book: isbn:", req.params.isbn);
    });

    app.put('/book/:isbn', (req, res) => {
        res.send(`new book, isbn: ${req.params.isbn}`);
        res.set('Content-Type', 'application/json');
        console.info("create book: ", req.params.isbn);
    });

    app.post('/book/:isbn', (req, res) => {
        res.send('update existing book');
        res.set('Content-Type', 'application/json');
        console.info("update book: ", req.params.isbn);
    });

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    });
}