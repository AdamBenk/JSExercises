
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

function updateBook(book) {
    const books = getBooks();
    const bookIndex = books.findIndex(book => book.isbn === isbn);

    books[bookIndex] = book;
    refreshLocal(books);
}