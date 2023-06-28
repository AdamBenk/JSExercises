window.addEventListener("load", () => {   
    let books = getBooks();
    const booklistContainer = document.querySelector("#booklistContainer");
    const editFormContainer = document.querySelector("#editItemContainer")

    const itemList = new ItemList(booklistContainer, books, (event) => {
        const bookISBN =  itemList.findISBN(event.target);
        const bookIndex = itemList.getBookIndexByISBN(bookISBN);
        const selectedbook = books[bookIndex];
        bookForm.render(selectedbook);
        bookForm.renderBtns();
    });
    itemList.render();
    itemList.addMenuBtns();

    const bookForm = new BookForm(editFormContainer);
});
