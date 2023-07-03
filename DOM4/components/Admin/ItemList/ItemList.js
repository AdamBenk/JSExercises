class ItemList extends EventTarget {
    container;
    booklist;
    storage;

    constructor(container, booklist, storage) {
        super();

        this.container = container;
        this.booklist = booklist;
        this.storage = storage;
    }

    initEventHandlers() {
        this.container.addEventListener("click", (event) => {
            let books = this.storage.getBooks();
            const bookISBN = this.getISBN(event.target);
            const bookIndex = this.storage.getBookIndexByISBN(bookISBN);
            const selectedBook = books[bookIndex];

            const editBookEvent = new CustomEvent("editbook", {
                detail: selectedBook
            });

            this.dispatchEvent(editBookEvent);
        });
    }

    renderItem(book) {
        return `<tr class="bookItem" data-isbn="${book.isbn}">
            <td>
                <input type="checkbox" class="checkBox">
            </td>
            <td class="bookAuthor" title="${book.author}">${book.author}</td>
            <td class="bookTitle" title="${book.title}">${book.title}</td>
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
                click: this.onAddButtonClick.bind(this)
            }, {
                id: "deleteBtn",
                title: "Delete Item",
                link: "",
                click: this.onDeleteButtonClick.bind(this)
            }

        ];
        const addDelBtn = new Menu(document.querySelector("#booklistBtnContainer"), deleteAndAddMenu);
        addDelBtn.render();
    }

    getISBN(element) {
        let isbn = element.dataset.isbn;
        return isbn ? isbn : this.getISBN(element.parentElement);
    }

    onAddButtonClick() {
        const editBookEvent = new CustomEvent("editbook", {
            detail: {
                title: "",
                author: "",
                isbn: "",
                publicationYear: "",
                pages: "",
                status: "",
                publisher: "",
                genre: "",
                language: "",
                price: "",
                oldPrice: "",
                rating: "",
                cover: "",
                shortDescription: "",
                longDescription: "",
            }
        });

        this.dispatchEvent(editBookEvent);
    }

    onDeleteButtonClick() {
        console.info("onDeleteButtonClick.this",this);

        const deleteBookEvent = new CustomEvent("deletebook", {
            detail: this.getCheckedBooks()
        });

        this.dispatchEvent(deleteBookEvent);
    }

    getCheckedBooks() {
        return Array.from(this.container.querySelectorAll(".bookItem")).filter(
            book => this.isChecked(book)
        );
    }

    isChecked(item) {
        const checkbox = item.querySelector(".checkBox");
        console.info(checkbox.checked);
        return checkbox.checked;
    }
}