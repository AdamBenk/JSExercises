class Request {
    xhr;
    send(url, method, successCallBack, errorCallBack, body = "") {
        this.xhr = new XMLHttpRequest();
        
        this.xhr.addEventListener("load", () => {
            const responseObj = JSON.parse(req.xhr.responseText);
            successCallBack(responseObj);
        });
        this.xhr.addEventListener("error", errorCallBack);
        this.xhr.open(method, url);
        this.xhr.setRequestHeader("Content-Type", "application/json");
        this.xhr.setRequestHeader("Access-Control-Allow-Methods", "*");

        this.xhr.send(body);
    }
}

const req = new Request(); 
export { req };