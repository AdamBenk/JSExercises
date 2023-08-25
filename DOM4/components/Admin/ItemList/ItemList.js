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
        this.#initEventHandlers();
    }

    #initEventHandlers() {
        this.container.addEventListener("click", this.onItemClick.bind(this));
        this.container.addEventListener("click", this.setDelBtn.bind(this));
    }

    clearSelectedItem() {
        this.selectedItem = null;
    }

    renderItem(book) {
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
            `</table>` + `<div id="buttonContainer"></div>`;
        this.addMenuBtns();
    }

    addMenuBtns() {
        const itemListButtons = [
            {
                id: "addBtn",
                class: "itemListButton",
                title: "Add Item",
                link: "",
                click: this.onAddButtonClick.bind(this)
            }, {
                id: "deleteBtn",
                class: "itemListButton",
                setdisabled: "true",
                title: "Delete Item",
                link: "",
                click: this.onDeleteButtonClick.bind(this)
            }, {
                id: "getListBtn",
                class: "itemListButton",
                title: "Get List",
                link: "",
                click: () => {
                    const xhr = new XMLHttpRequest();

                    xhr.addEventListener("load", () => {
                        console.info("result has arrived");
                        console.info(xhr.response)
                    });

                    xhr.open("GET", "http://localhost:3002/book/list");
                    xhr.send();
                }
            }
        ];

        const addDelBtn = new Menu(document.querySelector("#buttonContainer"), itemListButtons);
        return addDelBtn.render();
    }

    getISBN(element) {
        let isbn = element.dataset.isbn;
        return isbn ? isbn : this.getISBN(element.parentElement);
    }

    onItemClick(event) {
        if (((event.target.className === "bookAuthor") || (event.target.className === "bookTitle")) && (event.target.tagName !== "INPUT")) {
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
        const isbns = this.getCheckedBookISBNs();
        this.dispatchEvent(new CustomEvent("deletebook", { detail: isbns }));
    }

    getCheckedBookISBNs() {
        return Array.from(this.container.querySelectorAll(".checkBox:checked"))
            .map((checkBox) => this.getISBN(checkBox))
    }

    setDelBtn(event) {
        const delBtn = this.container.querySelector("#deleteBtn");
        const allChecked = Array.from(this.container.querySelectorAll(".checkBox:checked"));
        if (event.target.tagName === "INPUT" && allChecked.length > 0) {
            delBtn.disabled = false;
        } else {
            delBtn.disabled = true;
        }
    }
}