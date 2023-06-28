
function refreshLocal(books) {
    window.localStorage.setItem("books", JSON.stringify(books));
}

function getBooks() {
    let booksStr = window.localStorage.getItem("books");

    if (!booksStr) {
        books = window.bookList.books;
        refreshLocal(books);
    }

    return JSON.parse(booksStr);
}

function getBookByISBN(isbn) {
    const books = getBooks();

    return books.filter(book => book.isbn === isbn);
}

function getBookIndexByISBN(isbn) {
    const books = getBooks();
    
    return books.findIndex(book => book.isbn === isbn);
}

function findISBN(element) {
    let isbn = element.dataset.isbn;
    return isbn ? isbn : findISBN(element.parentElement);
}

