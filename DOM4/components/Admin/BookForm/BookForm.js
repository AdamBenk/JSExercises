import Menu from "../../Menu/Menu.js";

export default class BookForm {
    container;
    storage;


    constructor(container, storage) {
        this.container = container;
        this.storage = storage;
        this.#initEventHandlers();
    }

    #initEventHandlers() {
        this.container.addEventListener("keyup", this.setSaveBtn.bind(this));
        this.container.addEventListener("keyup", this.onKeyUp.bind(this));
    }

    onKeyUp() {
        this.checkValidity();
    }

    checkValidity() {
        const form = this.container.querySelector(".bookForm");
        const saveBtn = document.querySelector(`#saveBtn`);

        const isValid = form.checkValidity();
        saveBtn.disabled = !isValid;
        if (isValid) {
            saveBtn.classList.remove("disabled");
        } else {
            saveBtn.classList.add("disabled");
        }
    }

    render(book, isNew = false) {
        this.container.innerHTML = `<form action="" method="get" class="bookForm" data-isbn="${book.isbn}">
        <ul class="formContainer" data-set=>
          <li class="formItem">
            <label for="title">Title:</label>
            <textarea id="title" name="title" required minlength="2">${book.title}</textarea>
          </li>
          <li class="formItem">
            <label for="author">Author:</label>
            <textarea id="author" name="author" required minlength="4">${book.author}</textarea>
          </li>
          <li class="formItem">
            <label for="isbn">ISBN:</label>
            <input type="text" id="isbn" name="isbn" required pattern="\\d{10,13}" value="${book.isbn}" placeholder="ISBN" />
          </li>
          <li class="formItem">
            <label for="publicationYear">Publication year:</label>
            <input type="text" id="publicationYear" name="publicationYear" value="${book.publicationYear}" />
          </li>
          <li class="formItem">
            <label for="pages">Pages:</label>
            <input type="text" inputmode="numeric" id="pages" name="pages" value="${book.pages}" />
          </li>
          <li class="formItem">
            <label for="status">Status:</label>
            <input type="text" id="status" name="status" value="${book.status}" />
          </li>
          <li class="formItem">
            <label for="publisher">Publisher:</label>
            <input type="text" id="publisher" name="publisher" value="${book.publisher}" />
          </li>
          <li class="formItem">
            <label for="genre">Genre:</label>
            <input type="text" id="genre" name="genre" value="${book.genre}" />
          </li>
          <li class="formItem">
            <label for="language">Language:</label>
            <input type="text" id="language" name="language" value="${book.language}" />
          </li>
          <li class="formItem">
            <label for="price">Price:</label>
            <input type="text" inputmode="numeric" required id="price" name="price" value="${book.price}" />
          </li>
          <li class="formItem">
            <label for="oldPrice">Old price:</label>
            <input type="text" inputmode="numeric" id="oldPrice" name="oldPrice" value="${book.oldPrice}" />
          </li>
          <li class="formItem">
            <label for="rating">Rating:</label>
            <input type="number" id="rating" name="rating" min="0" max="5" step="0.5" value="${book.rating}" />
          </li>
          <li class="formItem">
            <label for="cover">Cover:</label>
            <input type="text" id="cover" name="cover" value="${book.cover}" />
          </li>
          <li class="formItem">
            <label for="shortDescription">Short description:</label>
            <textarea id="shortDescription" required minlength="10" name="shortDescription">${book.shortDescription}</textarea>
          </li>
          <li class="formItem">
            <label for="longDescription">Long description:</label>
            <textarea id="longDescription" name="longDescription">${book.longDescription}</textarea>
          </li>
        </ul>
        <div id="formBtnContainer"></div>
      </form>`;
        this.renderBtns(isNew);
    };

    renderBtns(isNew) {
        let buttons;

        if (isNew) {
            buttons = [
                {
                    id: "cancelNewFormBtn",
                    class: "bookFormButton",
                    title: "Cancel Form",
                    link: "",
                    click: () => {
                        this.discardForm()
                    }
                },
                {
                    id: "saveNewFormBtn",
                    class: "bookFormButton",
                    setdisabled: "true",
                    title: "Save New Book",
                    link: "",
                    click: () => {
                        this.saveNewForm()
                    }
                }
            ];
        } else {
            buttons = [
                {
                    id: "cancelBtn",
                    class: "bookFormButton",
                    title: "Cancel Changes",
                    link: "",
                    click: () => {
                        this.discardChanges();
                    }
                },
                {
                    id: "saveBtn",
                    class: "bookFormButton",
                    setdisabled: "true",
                    title: "Save Changes",
                    link: "",
                    click: () => {
                        this.saveChanges()
                    }
                }
            ];
        }
        const buttonMenu = new Menu(document.querySelector("#formBtnContainer"), buttons);
        buttonMenu.render();
        this.checkValidity();
    }

    clearContainer() {
        this.container.innerHTML = "";
    }

    discardChanges() {
        this.clearContainer();
    }

    saveChanges() {
        const books = this.storage.getBooks();
        const bookform = this.container.querySelector(".bookForm");
        const modifiedBook = new FormData(bookform);
        const modifiedBookObj = {};
        modifiedBook.forEach((value, key) => (modifiedBookObj[key] = value));
        const originalBookIndex = this.storage.getBookIndexByISBN(bookform.dataset.isbn);
        books[originalBookIndex] = modifiedBookObj;
        this.storage.refreshLocal(books);
        this.clearContainer();
    }

    hasAnyChanges() {
        const books = this.storage.getBooks();
        const bookform = this.container.querySelector(".bookForm");
        const modifiedBook = new FormData(bookform);
        const modifiedBookObj = {};
        modifiedBook.forEach((value, key) => (modifiedBookObj[key] = value));
        const originalBookIndex = this.storage.getBookIndexByISBN(bookform.dataset.isbn);
        const originalBook = books[originalBookIndex]
        let isSame = true;
        for (let key in originalBook) {
            if (originalBook[key] !== modifiedBookObj[key]) {
                isSame = false;
            }
        }
        return !isSame;
    }

    setSaveBtn(event) {
        const saveBtn = this.container.querySelector("#saveBtn");
        if (event.target.tagName === "INPUT" || "textarea") {
            console.info("this is a keyup");
            if (this.hasAnyChanges()) {
                saveBtn.disabled = false;
            } else {
                saveBtn.disabled = true;
            }
        }
    }

    discardForm() {
        this.clearContainer();
    }

    saveNewForm() {
        const books = this.storage.getBooks();
        const bookform = this.container.querySelector(".bookForm");
        const newBook = new FormData(bookform);
        const newBookObj = {};
        newBook.forEach((value, key) => (newBookObj[key] = value));
        if (newBookObj.isbn) {
            books.push(newBookObj)
            this.storage.refreshLocal(books);
            this.clearContainer();
        }
    }
}
