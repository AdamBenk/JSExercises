import { Storage } from './storage.js';
import express from 'express';

const app = express();
const port = 3000;

app.get('/book/list', (req, res) => {
    res.send('returning the list of books!')
});

app.get('/book/:isbn', (req, res) => {
    res.send('book info')
});

app.put('/book/:isbn', (req, res) => {
    res.send(`new book, isbn: ${req.params.isbn}`)
});

app.post('/book/:isbn', (req, res) => {
    res.send('update existing book')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

const storage = new Storage("books");


console.info("All routes init'd");