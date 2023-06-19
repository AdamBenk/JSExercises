class Menu {
    items;
    container;
    constructor(container, items) {
        this.items = items;
        this.container = container;
    }

    render() {
        const items = this.items.map(item => `<li><button class="searchButton" id="${item.id}">${item.title}</button></li>`).join('');
        this.container.innerHTML = `<ul>${items}</ul>`

        this.items.forEach(item => {
            const button = this.container.querySelector(`#${item.id}`);
            button.addEventListener("click", item.click);
        });
    }
}