export default class ResultList {
    container;
    constructor(container) {
        this.container = container; 
    } 

    initEventHandlers() {
        this.container.addEventListener("mouseenter", (event) => { this.mousePointOver(event); }, true);
        this.container.addEventListener("mouseleave", (event) => { this.mouseMoveAway(event); }, true);
        this.container.addEventListener("mousemove", (event) => { this.mouseMoving(event); }, true);
    }

    renderBook(book) {
        return `<li class="searchResultItem">
            <div class="sticker">
                <p class="title">${book.title}</p>
                <p class="author">${book.author}</p>
                <p class="price">${book.price}</p>
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
    
    displayRenderedBooks(searchresult) {
        this.container.innerHTML = searchresult.reduce((acc, curr) => acc + this.renderBook(curr), "");
        this.initEventHandlers();
    }
   
    mousePointOver(event) {
        if (event.target.className === "bookCoverImage") {
            const container = this.getContainer(event);
            const sticker = this.getSticker(container);
    
            sticker.style.zIndex = 65000;
            sticker.style.position = "absolute";
            this.show(sticker);
        }
    }
    
    mouseMoving(event) {
        if (event.target.className === "bookCoverImage") {
            const container = this.getContainer(event);
            const sticker = this.getSticker(container);
    
            sticker.style.left = this.getPos(event.offsetX +2);
            sticker.style.top = this.getPos(event.offsetY+18 );
        }
    }
    
    mouseMoveAway(event) {
        if (event.target.className === "bookCoverImage") {
            const container = this.getContainer(event);
            const sticker = this.getSticker(container);
            this.hide(sticker);
        }
    }
    
    getContainer(event) {
        return event.target.parentElement.parentElement;
    }

    getSticker(cont) {
        return cont.querySelector(".sticker");
    }

    getPos(pos) {
        return `${pos}px`
    }
    
    show(elem) {
        elem.style.display = "block";
    }
    
    hide(elem) {
        elem.style.display = "none";
    }
}