import "./books.js";
import ResultList from "../components/ResultList/ResultList.js";
import Menu from "../components/Menu/Menu.js";
import SearchBar from "../components/SearchBar/SearchBar.js";

window.addEventListener("load", () => {
    const books = window.bookList.books;
    const menuItems = [
        {
            id: "HotDealsMenuItem",
            class: "searchBarButton",
            title: "Hot Deals",
            link: "",
            click: () => {
                const sortResult = books.sort((book1, book2) => {
                    return book1.publicationYear - book2.publicationYear;
                });
                resultList.displayRenderedBooks(sortResult);
            } 
        }, {
            id: "BestSellersMenuItem",
            class: "searchBarButton",
            title: "Best Sellers",
            link: "",
            click: () => {
                const sortResult = books.sort((book1, book2) => {
                return book2.rating - book1.rating;
            });
                resultList.displayRenderedBooks(sortResult);
            }
        }, {
            id: "HotChoicesMenuItem",
            class: "searchBarButton",
            title: "Hot Choices",
            link: "",
            click: () => {
                const sortResult = books.sort((book1, book2) => {
                    return book1.price - book2.price;
                });
                resultList.displayRenderedBooks(sortResult);
            }
        }, {
            id: "JumpToAdmin",
            class: "searchBarButton",
            title: "",
            link: `<a href="../index_admin.html">Admin</a>`
        }

    ];

    const resultList = new ResultList(document.querySelector(".resultListContainer"));
    const menu = new Menu(document.querySelector("#menuContainer"), menuItems);
    
    const searchBar = new SearchBar(document.querySelector("#searchBarContainer"), () => {
        const searchBarInput = document.querySelector(".searchBar");
        const searchString = searchBarInput.value;
        const searchResult = books.filter(book => 
            book.title.includes(searchString) ||
            book.author.includes(searchString) ||
            book.shortDescription.includes(searchString) || 
            book.longDescription.includes(searchString));
        return searchResult.length ? 
        resultList.displayRenderedBooks(searchResult) : resultList.container.innerHTML = `No match for search "${searchString}"`;
    });
    
    menu.render();
    searchBar.render();
});

