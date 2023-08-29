import "./books.js";
import Storage from "../components/Storage/Storage.js";
import ItemList from "../components/Admin/ItemList/ItemList.js";
import BookForm from "../components/Admin/BookForm/BookForm.js";
import ServerStorage from "../components/Storage/ServerStorage.js";

window.addEventListener("load", () => {
    const storage = new Storage();
    const serverStorage = new ServerStorage("http://localhost:3002");
    let itemList;
    let bookForm;
    const booklistContainer = document.querySelector("#booklistContainer");
    const editFormContainer = document.querySelector("#formContainer");

    serverStorage.getBooks((response) => {
        itemList = new ItemList(booklistContainer, serverStorage);
        itemList.refreshList(response);
        itemList.addMenuBtns();
        itemList.addEventListener("editbook", (event) => {
            bookForm.render(event.detail);
        });

        itemList.addEventListener("createbook", (event) => {
            bookForm.render(event.detail, true);
        });

        itemList.addEventListener("deletebook", (event) => {
            serverStorage.deleteBooks(event.detail, () => {
                serverStorage.getBooks((response) => {
                    itemList.refreshList(response);
                    bookForm.clearContainer();
                });
            });
        });

        bookForm = new BookForm(editFormContainer, serverStorage);

        bookForm.addEventListener("clearItemList", (event) => {
            itemList.clearSelectedItem();
            itemList.render();
        });
        
        serverStorage.addEventListener("refresh", () => {
            console.info("refreshing list");
            itemList.render()
        });
    });
});