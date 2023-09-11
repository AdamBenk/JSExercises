class Request {
    xhr;
    send(url, method, successCallBack, errorCallBack, body = "") {
        this.xhr = new XMLHttpRequest();
        this.xhr.timeout = 2000;
        
        this.xhr.addEventListener("load", () => {
            const responseObj = JSON.parse(req.xhr.responseText);
            successCallBack && successCallBack(responseObj);
        });

        this.xhr.addEventListener("error", (err) => {
            console.info("error", err);
            errorCallBack && errorCallBack();
        });
        this.xhr.open(method, url);
        this.xhr.setRequestHeader("Content-Type", "application/json");
        this.xhr.setRequestHeader("Access-Control-Allow-Methods", "*");

        this.xhr.send(body);
    }
}

const req = new Request(); 
export { req };