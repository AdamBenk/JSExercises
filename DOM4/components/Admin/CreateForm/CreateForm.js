class BookForm {
    container;
    //book;
    constructor(container) {
        this.container = container; 
        //this.book = book;
    } 

    render(book) {
        console.info(this.container)
        console.info(book)
        this.container.innerHTML = `<form action="" method="">
        <ul class="formContainer">
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
      </form>`;
    }
}