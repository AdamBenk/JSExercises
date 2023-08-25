import { req } from "../XHR/Request.js";
export default class ServerStorage extends EventTarget {
    books;
    constructor(host) {
        super();
        this.host = host;
    }
    getBooks(cb) {
        req.send(this.host + "/book/list", "GET", (response) => {
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
        req.send(this.host + "/book/" + isbn, "delete", () => {
            console.info(this.host + "/book/" + isbn, req.xhr.response)
            const responseObj = JSON.parse(req.xhr.responseText);
            cb(responseObj);
            this.books = responseObj;
        });
    }

    saveBook(book/* book object */) {
        const originalBookIndex = this.getBookIndexByISBN(newBookObj.isbn);
        if (originalBookIndex >= 0) {  
            books[originalBookIndex] = newBookObj;
            this.refreshLocal(books);
        } else {
            books.push(newBookObj)
            this.refreshLocal(books);
        }
    }
} 