import Menu from "../components/Menu/menu.js";
import LoginWindow from "../components/LoginWindow/loginwindow.js";
import ErrorMessage from "../components/ErrorMessage/errormessage.js";

window.addEventListener("load", () => {
    
    const container = document.querySelector("body");
    
    const loginWindow = new LoginWindow(container);

    const menuItems = [
        {
            id: "loginBtn",
            class: "menuBtn",
            title: "Login",
            link: "",
            click: () => {
                loginWindow.render();        
                } 
        }, {
            id: "someBtn",
            class: "menuBtn",
            title: "This does nothing!",
            link: "",
            click: () => {           
            }
        }
    ];
    
    const menu = new Menu(document.querySelector("#menuContainer"), menuItems);
    menu.render();

    const errorwindow = new ErrorMessage(container);
    
    loginWindow.addEventListener("renderErrorMessage", (event) => {
        errorwindow.render(event.detail);
        console.info("message rendered")
    });
    

});