import Menu from "../Menu/menu.js";

export default class ErrorMessage extends EventTarget {
    container;

    constructor(container) {
        super();
        this.container = container;
    }

    render(message) {
        const modalWindow = this.container.appendChild(document.createElement("div"));
        modalWindow.setAttribute("id", "modalWindow2");
        const newWindow = this.container.appendChild(document.createElement("div"));
        newWindow.setAttribute("id", "loginFeedbackWindow");
        newWindow.innerHTML = 
        `<div class="errorMessageContainer">"${message}"</div>
        <div id="closeWinBtnContainer"></div>
        `
        this.renderCloseWinBtn();
    }

    renderCloseWinBtn() {
        const buttons = [
                {
                    id: "closeWinBtn",
                    class: "loginWindowBtn",
                    title: "Close",
                    link: "",
                    click: (event) => {
                        this.closeWindow();
                    }
                }
            ];
        
        const closeWinMenu = new Menu(this.container.querySelector("#closeWinBtnContainer"), buttons);
        closeWinMenu.render();
    };

    closeWindow() {
        const loginFeedbackWindow = document.querySelector("#loginFeedbackWindow");
        this.container.removeChild(loginFeedbackWindow);
        const modalWindow2 = document.querySelector("#modalWindow2");
        this.container.removeChild(modalWindow2);
    }
}