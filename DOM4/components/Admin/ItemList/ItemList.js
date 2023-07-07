import Menu from "../../Menu/Menu.js";
export default class ItemList extends EventTarget {
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
        this.container.addEventListener("click", this.onItemClick.bind(this));
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
        this.container.innerHTML =
            "<table>" +
            this.booklist.reduce((acc, curr) => acc + this.renderItem(curr), "") +
            `</table>`;
        this.addMenuBtns();
        this.initEventHandlers();
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
        const bookISBN = this.getISBN(event.target);
        const selectedBook = this.storage.getBookByISBN(bookISBN);

        const editBookEvent = new CustomEvent("editbook", {
            detail: selectedBook
        });

        this.dispatchEvent(editBookEvent);
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

        this.dispatchEvent(new CustomEvent("editbook", { detail: emptyBook }));
    }

    onDeleteButtonClick() {
        this.dispatchEvent(new CustomEvent("deletebook", { detail: this.getCheckedBooks() }));
    }

    getCheckedBooks() {
        return Array.from(this.container.querySelectorAll(".bookItem")).filter(book => this.isChecked(book));
    }

    isChecked(item) {
        return (item.querySelector(".checkBox") || { checked: false }).checked;
    }
}