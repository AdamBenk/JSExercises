import Menu from "../components/Menu/menu.js";
import LoginWindow from "../components/LoginWindow/loginwindow.js";

window.addEventListener("load", () => {
    
    const loginWindowContainer = document.querySelector("body");
    
    const loginWindow = new LoginWindow(loginWindowContainer);
    const menuItems = [
        {
            id: "loginBtn",
            class: "menuBtn",
            title: "Login",
            link: "",
            click: () => {
                console.info("clicked!", "this.container:", loginWindowContainer)
                loginWindow.render();              
                } 
        }, {
            id: "",
            class: "menuBtn",
            title: "This does nothing!",
            link: "",
            click: () => {           
            }
        }
    ];
    
    const menu = new Menu(document.querySelector("#menuContainer"), menuItems);
    menu.render();
});