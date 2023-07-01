window.addEventListener("load", () => {   
    const storage = new Storage();
    let books = storage.getBooks();
    const booklistContainer = document.querySelector("#booklistContainer");
    const editFormContainer = document.querySelector("#editItemContainer")

    const itemList = new ItemList(booklistContainer, books, storage, (event) => {
        const bookISBN =  itemList.findISBN(event.target);
        const bookIndex = itemList.getBookIndexByISBN(bookISBN);
        const selectedbook = books[bookIndex];
        bookForm.render(selectedbook);
        bookForm.renderBtns();
    } );
    itemList.render();
    itemList.addMenuBtns();

    const bookForm = new BookForm(editFormContainer, storage);
    
    storage.addEventListener("refresh", () => { itemList.render(); console.info("refresh happened") });

    const newBookForm = new NewBookForm(editFormContainer, storage);
    
    storage.addEventListener("addnew", () => { newBookForm.render();  
                                                newBookForm.renderBtnsForNewForm() });
    
    storage.addEventListener("clearBookForm", () => { editFormContainer.innerHTML = ""} );

    storage.addEventListener("addNewBtns", () => { bookForm.renderBtns(); console.info("Does this work?", bookForm.renderBtns()) } );
}); 