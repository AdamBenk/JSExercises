class Request {
    xhr;
    send(url, method, success, error) {
        this.xhr = new XMLHttpRequest();
        
        this.xhr.addEventListener("load", success);
        this.xhr.addEventListener("error", error);
        this.xhr.open(method, url);
        this.xhr.send();
    }
}

const req = new Request(); 
export { req };