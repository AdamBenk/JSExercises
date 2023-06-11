class SearchBar {
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
            <button id="magnifierIcon" class="searchButton">
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
    }

    onSearchBarClick() {
        const isVisible = this.searchBarInput.style.display === "block";

        this.searchBarInput.style.display = isVisible ? "none" : "block";
    }

    onEnterKeyUp(event) {
        if (event.key === "Enter") {
            this.searchCallback();
            console.info("valami")
        }
    }

    onEscapeKeyUp(event) {
        if (event.key === "Escape") {
            console.info("valami2")
        }
    }
}