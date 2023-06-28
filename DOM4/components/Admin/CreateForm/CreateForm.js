class BookForm {
    container;
    constructor(container) {
        this.container = container; 
    } 

    render(book) {

      this.container.innerHTML = `<form action="" method="" class="bookForm" data-isbn="${book.isbn}">
        <ul class="formContainer" data-set=>
          <li class="formItem">
            <label for="title">Title:</label>
            <textarea id="title" name="title">${book.title}</textarea>
          </li>
          <li class="formItem">
            <label for="author">Author:</label>
            <textarea id="author" name="author">${book.author}</textarea>
          </li>
          <li class="formItem">
            <label for="isbn">ISBN:</label>
            <input type="text" id="isbn" name="isbn" value=${book.isbn} placeholder=${book.isbn} />
          </li>
          <li class="formItem">
            <label for="publicationYear">Publication year:</label>
            <input type="text" id="publicationYear" name="publicationYear" value=${book.publicationYear} />
          </li>
          <li class="formItem">
            <label for="pages">Pages:</label>
            <input type="text" inputmode="numeric" id="pages" name="pages" value=${book.pages} />
          </li>
          <li class="formItem">
            <label for="status">Status:</label>
            <input type="text" id="status" name="status" value=${book.status} />
          </li>
          <li class="formItem">
            <label for="publisher">Publisher:</label>
            <input type="text" id="publisher" name="publisher" value=${book.publisher} />
          </li>
          <li class="formItem">
            <label for="genre">Genre:</label>
            <input type="text" id="genre" name="genre" value=${book.genre} />
          </li>
          <li class="formItem">
            <label for="language">Language:</label>
            <input type="text" id="language" name="language" value=${book.language} />
          </li>
          <li class="formItem">
            <label for="price">Price:</label>
            <input type="text" inputmode="numeric" id="price" name="price" value=${book.price} />
          </li>
          <li class="formItem">
            <label for="oldPrice">Old price:</label>
            <input type="text" inputmode="numeric" id="oldPrice" name="oldPrice" value=${book.oldPrice} />
          </li>
          <li class="formItem">
            <label for="rating">Rating:</label>
            <input type="number" id="rating" name="rating" min="0" max="5" step="0.5" value=${book.rating} />
          </li>
          <li class="formItem">
            <label for="cover">Cover:</label>
            <input type="text" id="cover" name="cover" value=${book.cover} />
          </li>
          <li class="formItem">
            <label for="shortdescription">Short description:</label>
            <textarea id="shortdescription" name="shortdescription">${book.shortDescription}</textarea>
          </li>
          <li class="formItem">
            <label for="longdescription">Long description:</label>
            <textarea id="longdescription" name="longdescription">${book.longDescription}</textarea>
          </li>
        </ul>
      </form>
      <div id="formBtnContainer"></div>`;
  };

  renderClearForm() {
    this.container.innerHTML = `<form action="" method="" class="bookForm" data-isbn=""}">
      <ul class="formContainer">
        <li class="formItem">
          <label for="title">Title:</label>
          <textarea id="title" name="title"></textarea>
        </li>
        <li class="formItem">
          <label for="author">Author:</label>
          <textarea id="author" name="author"></textarea>
        </li>
        <li class="formItem">
          <label for="isbn">ISBN:</label>
          <input type="text" id="isbn" name="isbn" />
        </li>
        <li class="formItem">
          <label for="publicationYear">Publication year:</label>
          <input type="text" id="publicationYear" name="publicationYear" />
        </li>
        <li class="formItem">
          <label for="pages">Pages:</label>
          <input type="text" inputmode="numeric" id="pages" name="pages" />
        </li>
        <li class="formItem">
          <label for="status">Status:</label>
          <input type="text" id="status" name="status" />
        </li>
        <li class="formItem">
          <label for="publisher">Publisher:</label>
          <input type="text" id="publisher" name="publisher" />
        </li>
        <li class="formItem">
          <label for="genre">Genre:</label>
          <input type="text" id="genre" name="genre" />
        </li>
        <li class="formItem">
          <label for="language">Language:</label>
          <input type="text" id="language" name="language" />
        </li>
        <li class="formItem">
          <label for="price">Price:</label>
          <input type="text" inputmode="numeric" id="price" name="price" />
        </li>
        <li class="formItem">
          <label for="oldPrice">Old price:</label>
          <input type="text" inputmode="numeric" id="oldPrice" name="oldPrice" />
        </li>
        <li class="formItem">
          <label for="rating">Rating:</label>
          <input type="number" id="rating" name="rating" min="0" max="5" step="0.5" />
        </li>
        <li class="formItem">
          <label for="cover">Cover:</label>
          <input type="text" id="cover" name="cover" />
        </li>
        <li class="formItem">
          <label for="shortdescription">Short description:</label>
          <textarea id="shortdescription" name="shortdescription"></textarea>
        </li>
        <li class="formItem">
          <label for="longdescription">Long description:</label>
          <textarea id="longdescription" name="longdescription"></textarea>
        </li>
      </ul>
    </form>
    <div id="formBtnContainer"></div>`;
  }

  renderBtns() {
    const saveAndDiscardMenu = [
      {
          id: "SaveBtn",
          title: "Discrad Changes",
          link: "",
          click: () => { this.discardChanges() }
      },
      {
          id: "DiscardBtn",
          title: "Save Changes",
          link: "",
          click: () => { this.saveChanges() } 
      }
    ];
    const saveAndDiscardBtn = new Menu(document.querySelector("#formBtnContainer"), saveAndDiscardMenu);
    saveAndDiscardBtn.render();
  }

  discardChanges() {
    const books = getBooks();
    const bookform = this.container.querySelector(".bookForm");
    const originalBookIndex = getBookIndexByISBN(bookform.dataset.isbn);
    const originalBook = books[originalBookIndex];
    this.render(originalBook);
    this.renderBtns();
  }

  saveChanges() {
    const books = getBooks();
    const bookform = this.container.querySelector(".bookForm");
    const modifiedBook = new FormData(bookform);
    const modifiedBookObj = {};
    modifiedBook.forEach((value, key) => (modifiedBookObj[key] = value));
    const originalBookIndex = getBookIndexByISBN(bookform.dataset.isbn);
    books[originalBookIndex] = modifiedBookObj;
    refreshLocal(books);
  }  
}