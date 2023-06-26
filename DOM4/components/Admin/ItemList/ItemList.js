class ItemList {
    container;
    booklist;
    constructor(container, booklist, SearchCallBack) {
        this.container = container; 
        this.booklist = booklist;
        this.SearchCallBack = SearchCallBack;
    } 

    initEventHandlers() {
        console.info("mmmm", this)
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
}