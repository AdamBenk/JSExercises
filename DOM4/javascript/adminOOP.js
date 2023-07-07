import "./books.js";
import Storage from "../components/Storage/Storage.js";
import ItemList from "../components/Admin/ItemList/ItemList.js";
import BookForm from "../components/Admin/BookForm/BookForm.js";

window.addEventListener("load", () => {
    const storage = new Storage();
    let books = storage.getBooks();
    const booklistContainer = document.querySelector("#booklistContainer");
    const editFormContainer = document.querySelector("#editItemContainer")

    const itemList = new ItemList(booklistContainer, books, storage);
    itemList.render();
    itemList.addMenuBtns();

    itemList.addEventListener("editbook", (event) => {
        bookForm.render(event.detail);
    });

    itemList.addEventListener("deletebook", (event) => {
        bookForm.render(event.detail);
    });



    const bookForm = new BookForm(editFormContainer, storage);
    
    storage.addEventListener("refresh", () => { itemList.render() });
}); 