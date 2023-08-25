class Request {
    xhr;
    send(url, method, successCallBack, errorCallBack) {
        this.xhr = new XMLHttpRequest();
        
        this.xhr.addEventListener("load", () => {
            const responseObj = JSON.parse(req.xhr.responseText);
            successCallBack(responseObj);
        });
        this.xhr.addEventListener("error", errorCallBack);
        this.xhr.open(method, url);
        this.xhr.send();
    }
}

const req = new Request(); 
export { req };