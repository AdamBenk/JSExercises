import { req } from "../XHR/Request.js";
export default class ServerStorage extends EventTarget {
    books;
    constructor(host) {
        super();
        this.host = host;
    }
    getBooks(cb) {
        req.send(`${this.host}/book/list`, "GET", (response) => {
            this.books = response;
            cb(response);
        });
    }

    getBookIndexByISBN(isbn) {
        return this.books.findIndex(book => book.isbn === isbn);
    }

    getBookByISBN(isbn, cb) {
        return this.books.find(book => book.isbn === isbn);
    }

    deleteBooks(isbn, cb) {
        req.send(`${this.host}/book/${isbn}`, "delete", () => {
            console.info(this.host + "/book/" + isbn, req.xhr.response)
            const responseObj = JSON.parse(req.xhr.responseText);
            cb(responseObj);
        });
    }

    checkIfAnyChanges(newBookObj) {
        return false;
    }

    saveBookMods(newBookObj, cb = () => {}) {

        req.send( `${this.host}/book/${newBookObj.isbn}`, "post", () => {
            const responseObj = JSON.parse(req.xhr.responseText);

            this.getBooks((books) => {
                this.refreshLocal(books);
                cb(responseObj);
            })

        }, () => {}, JSON.stringify(newBookObj));
    }

    refreshLocal(books) {
        this.books = books;
        const event = new CustomEvent("refresh", {});
        this.dispatchEvent(event);
    }
} 