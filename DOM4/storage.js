class Storage extends EventTarget {
    
    refreshLocal(books) {
        window.localStorage.setItem("books", JSON.stringify(books));
        const event = new CustomEvent("refresh", {});
        this.dispatchEvent(event);
       
    }
    
    getBooks() {
        
        let booksStr = window.localStorage.getItem("books");
        
        if (!booksStr) {
            books = window.bookList.books;
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
    
    addnew() {
        const eventSecond = new CustomEvent("addnew", {});
        this.dispatchEvent(eventSecond);
    }

    clearBookForm() {
        const eventSecond = new CustomEvent("clearBookForm", {});
        this.dispatchEvent(eventSecond);
    }

    addNewBtns() {
        const eventSecond = new CustomEvent("addNewBtns", {});
        this.dispatchEvent(eventSecond);
    }
}



