import "./books.js";
import Storage from "../components/Storage/Storage.js";
import ItemList from "../components/Admin/ItemList/ItemList.js";
import BookForm from "../components/Admin/BookForm/BookForm.js";
import ServerStorage from "../components/Storage/ServerStorage.js";

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
    });

    itemList.addEventListener("createbook", (event) => {
        bookForm.render(event.detail, true);
    });

    itemList.addEventListener("deletebook", (event) => {
        storage.deleteBooks(event.detail);
        itemList.render();
        bookForm.clearContainer();
    });

    const bookForm = new BookForm(editFormContainer, storage);
    
    bookForm.addEventListener("clearItemList", (event) => {
        itemList.clearSelectedItem();
        itemList.render();
    });
    
    storage.addEventListener("refresh", () => { itemList.render() });
    
    const serverStorage = new ServerStorage("http://localhost:3002");
    serverStorage.getBooks((a, b, c) => {
        console.info(a, b, c)
    });
    

});