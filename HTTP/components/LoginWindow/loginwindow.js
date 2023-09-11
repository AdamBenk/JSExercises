import Menu from "../Menu/menu.js";

export default class LoginWindow extends EventTarget {
    container;

    constructor(container) {
        super();
        this.container = container;
    }

    render() {
        console.info('I am rendering!')
        const newWindow = this.container.appendChild(document.createElement("div"));
        newWindow.setAttribute("id", "loginWindow");
        console.info(newWindow)
        newWindow.innerHTML = `<form action="" method="get" class="loginform">
            <div class="formItemContainer">
                <label for="username">Username: </label>
                <input type="text" name="username" id="username" class="loginInput" required />
            </div>
            <div class="formItemContainer">
                <label for="password">Password: </label>
                <input type="text" name="password" id="password" class="loginInput" required />
            </div>
            <div id="loginBtnContainer">
            </div>
        </form>`
        this.renderLloginBtns();
    }

    renderLloginBtns() {
        const buttons = [
                {
                    id: "loginBtn",
                    class: "loginWindowBtn",
                    setdisabled: "true",
                    title: "Login",
                    link: "",
                    click: () => {
                        this.submitLoginReq();
                    }
                },
                {
                    id: "closeLoginBtn",
                    class: "loginWindowBt",
                    title: "Close",
                    link: "",
                    click: (event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        
                    }
                }
            ];
        
            console.info("buttons render fired")
        console.info(document.querySelector("loginWindow"))
     
        const buttonMenu = new Menu(this.container.querySelector("#loginBtnContainer"), buttons);
        buttonMenu.render();
    };

    submitLoginReq() {

    }
}


        

