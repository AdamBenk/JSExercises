class ItemList {
    container;
    booklist;
    SearchCallBack;
    constructor(container, booklist, SearchCallBack) {
        this.container = container; 
        this.booklist = booklist;
        this.SearchCallBack = SearchCallBack;
    } 

    initEventHandlers() {
        this.container.addEventListener("click", (event) => {this.SearchCallBack(event)} ); 
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
        this.container.innerHTML = "<table>" + this.booklist.reduce((acc, curr) => acc + this.renderItem(curr), "") + "</table>";
        this.initEventHandlers();
    }

    findISBN(element) {
        let isbn = element.dataset.isbn;
        return isbn ? isbn : this.findISBN(element.parentElement);
    }

    getBookIndexByISBN(isbn) {
        const books = getBooks();
    
        return books.findIndex(book => book.isbn === isbn);
    }

    addMenuBtns() {
        const deleteAndAddMenu = [
            {
                id: "addBtn",
                title: "Add Item",
                link: "",
                click: () => {
                    const newForm = new BookForm(document.querySelector("#editItemContainer"))
                    newForm.renderClearForm();
                    newForm.renderBtns();
                } 
            }, {
                id: "deleteBtn",
                title: "Delete Item",
                link: "",
                click: () => { this.deleteBook() }
            }
            
        ];
        const addDelBtn = new Menu(document.querySelector("#booklistBtnContainer"), deleteAndAddMenu);
        addDelBtn.render(); 
    }

    deleteBook() {
        const listedBooks = Array.from(this.container.querySelectorAll(".bookItem"));
        const checked = listedBooks.filter(book => this.ischecked(book));
        checked.forEach(book => {
            const isbn = this.findISBN(book);
            const bookindex = this.getBookIndexByISBN(isbn);
            this.booklist.splice(bookindex, 1);
            refreshLocal(this.booklist);
        })
    };

    ischecked(item) {
        const checkbox = item.querySelector(".checkBox");
        if (checkbox.checked) {
            return item;
        }
    }
}