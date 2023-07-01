class ItemList {
    container;
    booklist;
    storage;
    constructor(container, booklist, storage, searchBook, addNewBook, clearDeleted) {
        this.container = container; 
        this.booklist = booklist;
        this.storage = storage;
        this.searchBook = searchBook;
        this.addNewBook = addNewBook;
        this.clearDeleted = clearDeleted;
    } 

    initEventHandlers() {
        this.container.addEventListener("click", (event) => { this.searchBook(event)} ); 
    }

    renderItem(book) {
        return `<tr class="bookItem" data-isbn="${book.isbn}">
            <td>
                <input type="checkbox" class="checkBox">
            </td>
            <td class="bookAuthor">${book.author}:</td>
            <td class="bookTitle">${book.title}</td>
        </tr>`;
    }
    
    render() {
        this.booklist = this.storage.getBooks();
        this.container.innerHTML = "<table>" + this.booklist.reduce((acc, curr) => acc + this.renderItem(curr), "") + "</table>";
        this.initEventHandlers();
    }

    addMenuBtns() {
        const deleteAndAddMenu = [
            {
                id: "addBtn",
                title: "Add Item",
                link: "",
                click: () => { this.addNewBook() } 
            }, {
                id: "deleteBtn",
                title: "Delete Item",
                link: "",
                click: () => { this.deleteBook(); 
                                this.clearDeleted(); }
            }
            
        ];
        const addDelBtn = new Menu(document.querySelector("#booklistBtnContainer"), deleteAndAddMenu);
        addDelBtn.render(); 
    }

    findISBN(element) {
        let isbn = element.dataset.isbn;
        return isbn ? isbn : this.findISBN(element.parentElement);
    }
   
    getBookIndexByISBN(isbn) {
        const books = this.storage.getBooks();
        console.info("this is the indexfinder", books) 
        return books.findIndex(book => book.isbn === isbn);
    }

    deleteBook() {
        const listedBooks = Array.from(this.container.querySelectorAll(".bookItem"));
        const checked = listedBooks.filter(book => this.ischecked(book));
        checked.forEach(book => {
            const isbn = this.findISBN(book);
            const bookindex = this.getBookIndexByISBN(isbn);
            this.booklist.splice(bookindex, 1);
            this.storage.refreshLocal(this.booklist);
            console.info("refresh happened after deleting item")
        })
    };

    ischecked(item) {
        const checkbox = item.querySelector(".checkBox");
        if (checkbox.checked) {
            return item;
        }
    }
}