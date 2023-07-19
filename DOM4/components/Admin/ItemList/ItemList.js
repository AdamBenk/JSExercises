import Menu from "../../Menu/Menu.js";
export default class ItemList extends EventTarget {
    container;
    booklist;
    storage;
    selectedItem;

    constructor(container, booklist, storage) {
        super();

        this.container = container;
        this.booklist = booklist;
        this.storage = storage;

        this.selectedItem = null;
        this.initEventHandlers();

    }

    initEventHandlers() {
        this.container.addEventListener("click", this.onItemClick.bind(this));
    }

    renderItem(book) {
        console.info(";");
        let isSelected = false;

        if (this.selectedItem) {
            if (this.selectedItem.isbn === book.isbn) {
                isSelected = true;
            }
        }

        return `<tr class="bookItem ${isSelected ? 'selected':''}" data-isbn="${book.isbn}">
            <td>
                <input type="checkbox" class="checkBox">
            </td>
            <td class="bookAuthor" title="${book.author}">${book.author}</td>
            <td class="bookTitle" title="${book.title}">${book.title}</td>
        </tr>`;
    }

    render() {
        this.booklist = this.storage.getBooks();
        this.container.innerHTML =
            "<table>" +
            this.booklist.reduce((acc, curr) => acc + this.renderItem(curr), "") +
            `</table>`;
        this.addMenuBtns();
    }

    addMenuBtns() {
        const itemListButtons = [
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

        const addDelBtn = new Menu(document.querySelector("#booklistBtnContainer"), itemListButtons);
        return addDelBtn.render();
    }

    getISBN(element) {
        let isbn = element.dataset.isbn;
        return isbn ? isbn : this.getISBN(element.parentElement);
    }

    onItemClick(event) {
        if (event.target.tagName !== "INPUT" && event.target !== this.container) {
            const bookISBN = this.getISBN(event.target);
            const selectedBook = this.storage.getBookByISBN(bookISBN);
            this.selectedItem = selectedBook;

            const editBookEvent = new CustomEvent("editbook", {
                detail: selectedBook
            });

            this.render();

            this.dispatchEvent(editBookEvent);
        }
    }

    onAddButtonClick() {
        const emptyBook = {
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
        };

        this.dispatchEvent(new CustomEvent("createbook", { detail: emptyBook }));
    }

    onDeleteButtonClick() {

        //
        const isbns = this.getCheckedBookISBNs();

        this.dispatchEvent(new CustomEvent("deletebook", { detail: isbns }));
    }

    getCheckedBookISBNs() {
        return Array.from(this.container.querySelectorAll(".checkBox:checked"))
            .map((checkBox) => this.getISBN(checkBox));

    }
}