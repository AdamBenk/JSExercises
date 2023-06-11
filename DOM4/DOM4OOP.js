window.addEventListener("load", () => {
    const menuItems = [
        {
            id: "HotDealsMenuItem",
            title: "Hot Deals",
        }, {
            id: "BestSellersMenuItem",
            title: "Best Sellers"
        }, {
            id: "HotChoicesMenuItem",
            title: "Hot Choices"
        }
    ];

    const menu = new Menu(document.querySelector("#menuContainer"), menuItems);
    const searchBar = new SearchBar(document.querySelector("#searchBarContainer"));

    menu.render();
    searchBar.render();

});

