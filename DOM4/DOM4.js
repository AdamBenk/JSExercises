/**
 * DOM4 exercise is about Events and Event handling and Forms. You will read about Events on MDN and learn how to handle
 * them, and you'll write a new application that uses different kind of Events like:
 * - click, keyup, change, blur, focus, mouseover, mouseout, mouseenter, mouseleave, mousemove, mousedown, mouseup,
 *   keydown, keyup, keypress
 *
 * - form events: submit, reset, change, input, focus, blur
 * And also form elements like:
 * - input, textarea, select, button, checkbox, radio, option
 *
 * The most important pages are marked with "!".
 * Learning materials:
 *  - Forms on MDN:
 *      https://developer.mozilla.org/en-US/docs/Learn/Forms
 *    ! https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form
 *      https://developer.mozilla.org/en-US/docs/Learn/Forms/How_to_structure_a_web_form
 *    ! https://developer.mozilla.org/en-US/docs/Learn/Forms/Basic_native_form_controls
 *    ! https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types
 *      https://developer.mozilla.org/en-US/docs/Learn/Forms/Other_form_controls
 *      https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation
 *      https://developer.mozilla.org/en-US/docs/Learn/Forms/Styling_web_forms
 *      https://developer.mozilla.org/en-US/docs/Learn/Forms/Advanced_form_styling
 *
 *  - Events on MDN:
 *   ! https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
 *     https://developer.mozilla.org/en-US/docs/Web/Events
 *     https://developer.mozilla.org/en-US/docs/Web/API/Event
 *
 *  - Event bubbling and capturing:
 *   ! https://javascript.info/bubbling-and-capturing
 *
 */
/**
 * Bookstore Application
 *
 * You will create a new application that will be a simple bookstore. The application will have a title, a menu, a search
 * bar, a list of books. The Application is able to search for books by title, author, genre, language, and ISBN.
 *
 * The application will have a menu with the following items:
 * - Hot Deals: clicking on this item, the list will be refreshed with the latest books that are on sale.
 * - Best Sellers: clicking on this item, the list will be refreshed with the best selling books.
 * - Cheapest: clicking on this item, the list will be refreshed with the cheapest books.
 *
 * - Search: clicking on this item, the search bar will be displayed.
 * The search is represented bz a magnifier icon. Clicking on the icon, the search bar will be displayed.
 *
 *
 * Exercise 1: design
 * 1. Create a new HTML file and add the basic structure of the page.
 *  - Add a title to the page. Follow the design in design.png, you can choose different font, font size, font color.
 *  - Add a menu to the page. All items are Anchor elements. (<a href="#">). Follow the design in design.png
 *  - Add a search bar to the page. There's an input field next to the magnifier icon, which is invisible by default.
 *  - Add a list of books to the page. First, you'll add 3 books, like in the design, but later you'll create the list dynamically.
 *  - Add a footer to the page. It's static, it doesn't change.
 *  - Add a script tag to the page.
 *  - Add a link to the DOM4.js file.
 *
 *  Design details:
 *  - change the color of the menu items when the mouse is over the item.
 *  - change the color of the menu items when the item is clicked.
 *  - change the color of the input field, when the mouse is over it
 *  - change the color of the input field, when the input field is focused
 *
 *  You can choose the focus, hover and active colors and design.
 *
 *  Exercise 2: Events
 *  1. Add a click event handler to the magnifier icon. When the icon is clicked, the search bar should be displayed, when clicked again,
 *     the search bar disappears.
 *  2. Add a keyup event handler to the input field. When escape is pressed, the search bar should be hidden.
 *  3. Add a keyup event handler to the input field. When enter is pressed, the search should be executed.
 *  4. Add a click event handler to the menu items. When the item is clicked, the list of books should be refreshed.
 *   - Hot Deals: the list should be refreshed with the latest books that are on sale.
 *   - Best Sellers: the list should be refreshed with the best selling books.
 *   - Cheapest: the list should be refreshed with the cheapest books.
 *   Use filter method on window.books array to filter the books.
 *
 *  4. Add a click event handler to the list container and use event delegation to handle the click event on the list items.
 *   When the user hover over the picture on a list item, the details of the book should be displayed over the exact position of the mouse
 *   and follows the mouse until the user hover off the picture.
 *   Use MouseMove, MouseEnter, MouseLeave events. Change the position of the details element to follow the mouse. Use the offsetX and offsetY
 *   properties of the event object to calculate the position of the details element. Use the style property to change the position of the details element.
 *   Use the style property to change the visibility of the details element.
 */

window.addEventListener("load", init);


function init() {
    const magnifierIcon = document.getElementById("magnifierIcon");
    const searchBar = document.getElementById("searchBar");
    const hotDealsBtn = document.getElementById("hotDealsBtn"); 
    const bestSellersBtn = document.getElementById("bestSellersBtn"); 
    const hotChoicesBtn = document.getElementById("hotChoicesBtn"); 
    const resultContainer = document.getElementById("resultListContainer");
    magnifierIcon.addEventListener("click", checkSearchBarStatus);
    searchBar.addEventListener("keyup", startSearch);
    searchBar.addEventListener("keyup", hideIfEscape);
    searchBar.addEventListener("blur", hideIfMoveAway);
    hotDealsBtn.addEventListener("click", () => sortByDate(window.bookList.books));
    bestSellersBtn.addEventListener("click", sortByRating);
    hotChoicesBtn.addEventListener("click", sortByPrice);
    resultContainer.addEventListener("mouseenter", mousePointOver, true);
    resultContainer.addEventListener("mouseleave", mouseMoveAway, true);
    resultContainer.addEventListener("mousemove", mouseMoving, true);
}

function checkSearchBarStatus() {
    const searchBar = document.getElementById("searchBar");
    if (searchBar.style.display === "none") {
        revealSearchBar();
    } else {
        hideSearchBar();
    }
}

function revealSearchBar() {
    const searchBar = document.getElementById("searchBar");
    searchBar.style.display = "block";
}

function hideSearchBar() {
    const searchBar = document.getElementById("searchBar");
    searchBar.style.display = "none";
}

function hideIfEscape(event) {
    const searchBar = document.getElementById("searchBar");
    if (event.key === "Escape") {
        searchBar.value = "";
        searchBar.style.display = "none";
    }
}

function hideIfMoveAway() {
    const searchBar = document.getElementById("searchBar");
    searchBar.value = "";
    searchBar.style.display = "none";
}

function startSearch(event) {
    if (event.key === "Enter") {
        displaySearchResult();
    }
}

function findBook(books, searchString) {
    return books.filter(book => 
        book.title.includes(searchString) ||
        book.author.includes(searchString) || 
        book.shortDescription.includes(searchString) || 
        book.longDescription.includes(searchString));
}

function renderBook(book) {
    return `<li class="searchResultItem">
        <div class="sticker">
            <p class="">${book.title}</p>
            <p class="">${book.author}</p>
            <p class="">${book.price}</p>
        </div>
        <div class="bookCoverConatiner">
            <img class="bookCoverImage" src="${book.cover}" alt="">
        </div>
        <p class="bookFormat">PAPERBACK</p>
        <p class="title">${book.title}</p>
        <p class="author">${book.author}</p>
        <p class="price">${book.price}</p>
    </li>`;
}

function renderBooks(books) {
    const searchBar = document.getElementById("searchBar");
    const arrRender = books.reduce((acc, curr) => acc + renderBook(curr), "");
    return arrRender.length === 0 ? `No match for ${searchBar.value}` : arrRender;
}

function displayRenderedBooks(searchOrSortResult) {
    const resultContainer = document.getElementById("resultListContainer");
    resultContainer.innerHTML = renderBooks(searchOrSortResult);    
}

function displaySearchResult() {
    const searchBar = document.getElementById("searchBar");
    const bookList = window.bookList.books;
    const searchString = searchBar.value;
    const searchResult = findBook(bookList, searchString);
    return displayRenderedBooks(searchResult);
}

function sortByDate(bookList) {
    const sortResult = bookList.sort((book1, book2) => {
        return book1.publicationYear - book2.publicationYear;
    });
    return displayRenderedBooks(sortResult);
}

function sortByRating() {
    const bookList = window.bookList.books;
    const sortResult = bookList.sort((book1, book2) => {
        return book2.rating - book1.rating;
    });
    return displayRenderedBooks(sortResult);
}

function sortByPrice() {
    const bookList = window.bookList.books;
    const sortResult = bookList.sort((book1, book2) => {
        return book1.price - book2.price;
    });
    return displayRenderedBooks(sortResult);
}

function mousePointOver(event) {
    if (event.target.className === "bookCoverImage") {
        const container = event.target.parentElement.parentElement;
        console.info("over", container);
        const sticker = getSticker(container);

        sticker.style.zIndex = 65000;
        sticker.style.position = "absolute";
        sticker.style.display = "block";
    }
}

function mouseMoving(event) {
    if (event.target.className === "bookCoverImage") {
        const container = event.target.parentElement.parentElement;
        console.info("move", container);
        const sticker = getSticker(container);

        sticker.style.left = getPos(event.offsetX +2);
        sticker.style.top = getPos(event.offsetY+18 );
    }
}

function mouseMoveAway(event) {
    if (event.target.className === "bookCoverImage") {
        const container = event.target.parentElement.parentElement;
        console.info("over", container);
        const sticker = getSticker(container);
        sticker.style.display = "none";
    }
}

function getSticker(cont) {
    return cont.querySelector(".sticker");
}
function getPos(pos) {
    return `${pos}px`
}