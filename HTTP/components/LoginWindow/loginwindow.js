import Menu from "../Menu/menu.js";
import { req } from "../../scripts/Request.js";

export default class LoginWindow extends EventTarget {
    container;

    constructor(container) {
        super();
        this.container = container;
    }

    #initEventHandlers() {
        this.container.addEventListener("keyup", this.isValid.bind(this));
    }

    render() {
        const modalWindow = this.container.appendChild(document.createElement("div"));
        modalWindow.setAttribute("id", "modalWindow");
        const newWindow = this.container.appendChild(document.createElement("div"));
        newWindow.setAttribute("id", "loginWindow");
        newWindow.innerHTML = 
        `<form action="" method="get" id="loginform">
            <div class="formItemContainer">
                <label for="username">Username: </label>
                <input type="text" name="username" id="username" class="loginInput" />
            </div>
            <div class="formItemContainer">
                <label for="password">Password: </label>
                <input type="text" name="password" id="password" class="loginInput" />
            </div>
        </form>
        <div id="loginBtnContainer">
        </div>`
        this.renderLoginBtns();
        this.#initEventHandlers();
    }

    renderLoginBtns() {
        const buttons = [
                {
                    id: "loginBtn",
                    class: "loginWindowBtn",
                    setdisabled: "",
                    title: "Login",
                    link: "",
                    click: (ev) => {
                        
                        const username = this.container.querySelector("#username"); 
                        const password = this.container.querySelector("#password");  
                        const url = "http://localhost:3002/login";                      
                        const params = {
                            
                            "username" : username.value,
                            "password" : password.value
                        };

                        req.post(url, params, (res)=>{
                            console.info("success", res, res.message);
                            this.dispatchEvent(new CustomEvent("renderErrorMessage", { detail: res.message }));
                        }, (status, errorObj)=>{
                            this.dispatchEvent(new CustomEvent("renderErrorMessage", { detail: errorObj.message }));
                           console.info("error", status, errorObj);
                        });
                        ev.preventDefault();
                        ev.stopPropagation();
                    }
                },
                {
                    id: "closeLoginBtn",
                    class: "loginWindowBtn",
                    title: "Close",
                    link: "",
                    click: (event) => {
                        this.closeWindow();
                    }
                }
            ];
        
        const buttonMenu = new Menu(this.container.querySelector("#loginBtnContainer"), buttons);
        buttonMenu.render();
    };

    closeWindow() {
        const loginwindow = document.querySelector("#loginWindow");
        this.container.removeChild(loginwindow);
        const modalwindow = document.querySelector("#modalWindow");
        this.container.removeChild(modalwindow);
    }

    isValid() {
        const formcheck = this.container.querySelector("#loginform");
        return formcheck.reportValidity();
    }

    setLoginBtn(event) {
        const loginBtn = this.container.querySelector("#loginBtn");
        console.info(this.isValid());
        loginBtn.disabled = !this.isValid();
        if (!this.isValid()) {
            loginBtn.removeAttribute("disabled");
        }
    }
}


        

