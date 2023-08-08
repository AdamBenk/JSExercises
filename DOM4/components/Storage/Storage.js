export default class Storage extends EventTarget {
    
    refreshLocal(books) {
        window.localStorage.setItem("books", JSON.stringify(books));
        const event = new CustomEvent("refresh", {});
        this.dispatchEvent(event);
    }
    
    getBooks() {
        
        let booksStr = window.localStorage.getItem("books");
        
        if (!booksStr || booksStr === "undefined") {
            console.info("load default")
            const books = window.bookList.books;
            this.refreshLocal(books);
        }
    
        return JSON.parse(booksStr);
    }
    
    getBookIndexByISBN(isbn) {
        const books = this.getBooks();
        
        return books.findIndex(book => book.isbn === isbn);
    }

    getBookByISBN(isbn) {
        const books = this.getBooks();

        return books.find(book => book.isbn === isbn);
    }

    deleteBooks(isbns) {
        const books = this.getBooks();

        const newBookList = books.filter(book => !isbns.includes(book.isbn));

        this.refreshLocal(newBookList);
    }

    saveBook(book/* book object */) {
        // if isbn is empty then create new book
        // if isbn is not empty then update book
        if (book.isbn === "") {
            // push
        } else {
            // update
        }
    }
}
