export default class SearchBar {
    container;
    searchBarInput;
    searchBarIcon;
    constructor(container, searchCallback) {
        this.container = container;
        this.searchCallback = searchCallback;
    }

    render() {
        this.container.innerHTML = `
            <input class="searchBar" type="text">
            <button id="magnifierIcon" class="searchMenuButton">
                <img src="images/magnifier-glass-icon.svg" alt="">
            </button>
        `;
        this.initEventHandlers();
    }

    initEventHandlers() {
        this.searchBarIcon = this.container.querySelector("#magnifierIcon");
        this.searchBarInput = this.container.querySelector(".searchBar");
        this.searchBarIcon.addEventListener("click", () => { this.onSearchBarClick(); });
        this.searchBarInput.addEventListener("keyup", (event) => { this.onEnterKeyUp(event); });
        this.searchBarInput.addEventListener("keyup", (event) => { this.onEscapeKeyUp(event); });
        this.searchBarInput.addEventListener("blur", (event) => { this.onMoveAway(event); });
    }

    onSearchBarClick() {
        const isVisible = this.searchBarInput.style.display === "block";
        this.searchBarInput.style.display = isVisible ? "none" : "block";
    }

    onEnterKeyUp(event) {
        if (event.key === "Enter") {
            this.searchCallback();
            }
    }

    onEscapeKeyUp(event) {
        const searchBar = document.querySelector(".searchBar");
        if (event.key === "Escape") {
            searchBar.value = "";
            searchBar.style.display = "none";
        }
    }

    onMoveAway() {
        const searchBar = document.querySelector(".searchBar");
        searchBar.value = "";
        searchBar.style.display = "none";
    }
}