window.addEventListener("load", () => {   
    let books = getBooks();

    const booklistContainer = document.querySelector("#booklistContainer");
        
    const deleteAndAddMenu = [
        {
            id: "addBtn",
            title: "Add Item",
            link: "",
            click: () => {
                
            } 
        }, {
            id: "deleteBtn",
            title: "Delete Item",
            link: "",
            click: () => {
                const allItems = booklistContainer.querySelectorAll(".bookItem")
                let deletedTitle;
                allItems.forEach(item => {
                if (item.querySelector(".checkBox").checked) {
                    deletedTitle = item.querySelector(".bookTitle").innerHTML;
                    booklistContainer.removeChild(item);
                    books = books.filter((book)=> {
                        if (book.title !== deletedTitle) {
                            return book;
                            }
                        })
                    }
                    window.localStorage.setItem("books", JSON.stringify(books));

                });
            }
        }
    ];

    const saveAndDiscardMenu = [
        {
            id: "SaveBtn",
            title: "Save Changes",
            link: "",
            click: () => {
                
            } 
        },
        {
            id: "DiscardBtn",
            title: "Discard Changes",
            link: "",
            click: () => {
                
            } 
        }
    ]

    const itemList = new ItemList(booklistContainer, books, (event) => {
        console.info("this:", this);
        this.findISBN(event.target);
    });
    itemList.render();
    
    const addDelBtn = new Menu(document.querySelector("#booklistBtnContainer"), deleteAndAddMenu);
    addDelBtn.render();

    const saveAndDiscardBtn = new Menu(document.querySelector("#editItemContainer"), saveAndDiscardMenu);
    addDelBtn.render();

    const bookForm = new BookForm(document.querySelector("#editItemContainer"));
});
