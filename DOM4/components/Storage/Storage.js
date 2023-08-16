export default class Storage extends EventTarget {
    
    refreshLocal(books) {
        window.localStorage.setItem("books", JSON.stringify(books));
        const event = new CustomEvent("refresh", {});
        this.dispatchEvent(event);
    }
    
    getBooks() {
        
        let booksStr = window.localStorage.getItem("books");
        
        if (!booksStr || booksStr === "undefined") {
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

    getOriginalBook(newBookObj) {
        const books = this.getBooks();
        const originalBookIndex = this.getBookIndexByISBN(newBookObj.isbn);
        const originalBook = books[originalBookIndex];
        return originalBook;
    }

    checkIfAnyChanges(newBookObj) {
        let isSame = true;
        for (let key in this.getOriginalBook(newBookObj)) {
            if (this.getOriginalBook(newBookObj)[key] !== newBookObj[key]) {
                isSame = false;
            }
        };
        return isSame;
    }

    saveBookMods(newBookObj) {
        const books = this.getBooks();
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
