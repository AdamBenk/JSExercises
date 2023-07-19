import "./books.js";
import Storage from "../components/Storage/Storage.js";
import ItemList from "../components/Admin/ItemList/ItemList.js";
import BookForm from "../components/Admin/BookForm/BookForm.js";

window.addEventListener("load", () => {
    const storage = new Storage();
    let books = storage.getBooks();
    //let books = window.bookList.books;
    //storage.refreshLocal(books)
    const booklistContainer = document.querySelector("#booklistContainer");
    const editFormContainer = document.querySelector("#formContainer")

    const itemList = new ItemList(booklistContainer, books, storage);
    itemList.render();
    itemList.addMenuBtns();

    itemList.addEventListener("editbook", (event) => {
        bookForm.render(event.detail);
        bookForm.renderBtns();
    });

    itemList.addEventListener("createbook", (event) => {
        bookForm.render(event.detail);
        bookForm.renderBtnsForNewForm();
    });

    itemList.addEventListener("deletebook", (event) => {
        storage.deleteBooks(event.detail);
        itemList.render();
        bookForm.clearContainer();
    });

    const bookForm = new BookForm(editFormContainer, storage);
    
    storage.addEventListener("refresh", () => { itemList.render() });
});