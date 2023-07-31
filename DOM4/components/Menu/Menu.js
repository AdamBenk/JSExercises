export default class Menu {
    items;
    container;
    constructor(container, items) {
        this.items = items;
        this.container = container;
    }

    render() {
        const items = this.items.map(item => `<li><button class="${item.class}" id="${item.id}">${item.title}${item.link}</button></li>`).join('');
        this.container.innerHTML = `<ul>${items}</ul>`

        this.items.forEach(item => {
            const button = this.container.querySelector(`#${item.id}`);
            if (`${item.setdisabled}` === "true") {
                button.setAttribute("disabled", "")
            }
            button.addEventListener("click", item.click);
        });
    }
}