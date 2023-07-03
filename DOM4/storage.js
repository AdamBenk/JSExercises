class Storage extends EventTarget {
    
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
    
    getBookByISBN(isbn) {
        const books = this.getBooks();
    
        return books.filter(book => book.isbn === isbn);
    }
    
    getBookIndexByISBN(isbn) {
        const books = this.getBooks();
        
        return books.findIndex(book => book.isbn === isbn);
    }
}



