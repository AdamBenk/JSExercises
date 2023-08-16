import { req } from "../XHR/Request.js";
export default class ServerStorage extends EventTarget {
    constructor(host) {
        super();
        this.host = host;
    }
    getBooks(cb) {
        req.send(this.host + "/book/list", "GET", cb);
    }

    getBookIndexByISBN(isbn, cb) {

    }

    getBookByISBN(isbn, cb) {

    }

    deleteBooks(isbns, cb) {

    }

    saveBook(book/* book object */) {

    }
}
