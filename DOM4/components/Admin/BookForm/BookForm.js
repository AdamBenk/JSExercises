import Menu from "../../Menu/Menu.js";

export default class BookForm extends EventTarget {
    container;
    storage;
    isNew;

    constructor(container, storage) {
        super();
        this.container = container;
        this.storage = storage;
        this.isNew = isNew;
        this.#initEventHandlers();
    }

    #initEventHandlers() {
        this.container.addEventListener("keyup", this.setSaveBtn.bind(this));
        this.container.addEventListener("keyup", this.setSaveNewBtn.bind(this));
        this.container.addEventListener("keyup", this.isValid.bind(this));
    }

    setSaveBtn(event) {
      const saveBtn = this.container.querySelector("#saveBtn");
      if (saveBtn !== null && (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA")) {
          if (!this.storage.checkIfAnyChanges(this.getNewBookObj()) && this.isValid()) {
              saveBtn.disabled = false;
          } else {
              saveBtn.disabled = true;
          }
      }
    }

    setSaveNewBtn() {
      const saveNewFormBtn = this.container.querySelector("#saveNewFormBtn");
      if (saveNewFormBtn !== null) {
          if (this.isValid()) {
              saveNewFormBtn.disabled = false;
          } else {
              saveNewFormBtn.disabled = true;
          }
      }
    }

    isValid() {
        const form = this.container.querySelector(".bookForm");
        return form.checkValidity();
    }

    render(book, isNew = false) {
        this.container.innerHTML = `<form action="" method="get" class="bookForm" data-isbn="${book.isbn} ${!isNew ? "readonly" : ""}">
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
                        this.discardChanges()
                    }
                },
                {
                    id: "saveNewFormBtn",
                    class: "bookFormButton",
                    setdisabled: "true",
                    title: "Save New Book",
                    link: "",
                    click: () => {
                        this.saveChanges()
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
        const buttonMenu = new Menu(this.container.querySelector("#formBtnContainer"), buttons);
        buttonMenu.render();
    }

    clearContainer() {
        this.container.innerHTML = "";
        this.dispatchEvent(new CustomEvent("clearItemList", { detail: this.event }));
    }

    discardChanges() {
        this.clearContainer();
    }

    getNewBookObj() {
        const bookform = this.container.querySelector(".bookForm");
        const modifiedBook = new FormData(bookform);
        const modifiedBookObj = {};
        modifiedBook.forEach((value, key) => (modifiedBookObj[key] = value));
        console.info("NewBookObject", modifiedBookObj);
        return modifiedBookObj;
    }

    saveChanges() {
        this.storage.saveBookMods(this.getNewBookObj(), this.isNew);
        this.clearContainer();
    }
}
