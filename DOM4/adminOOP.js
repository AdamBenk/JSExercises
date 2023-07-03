window.addEventListener("load", () => {   
    const storage = new Storage();
    let books = storage.getBooks();
    const booklistContainer = document.querySelector("#booklistContainer");
    const editFormContainer = document.querySelector("#editItemContainer")

    const itemList = new ItemList(booklistContainer, books, storage, (event) => {
        books = storage.getBooks();
        const bookISBN =  itemList.findISBN(event.target);
        const bookIndex = itemList.getBookIndexByISBN(bookISBN);
        const selectedbook = books[bookIndex];
        
        bookForm.render(selectedbook);
        bookForm.renderBtns();
    }, () => {
        bookForm.render();  
        bookForm.renderBtnsForNewForm();
        storage.getBooks();
        itemList.render();
    }, () => { editFormContainer.innerHTML = "" });
    itemList.render();
    itemList.addMenuBtns();

    const bookForm = new BookForm(editFormContainer, storage);
    
    storage.addEventListener("refresh", () => { itemList.render() });
}); 