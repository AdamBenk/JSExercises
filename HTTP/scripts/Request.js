
class Request {
    xhr;
   
    send(url, method, successCallBack, errorCallBack, body = "") {
        this.xhr = new XMLHttpRequest();
        this.xhr.timeout = 1500;
        this.xhr.addEventListener("load", () => {
            const responseObj = JSON.parse(this.xhr.responseText);
            const status = this.xhr.status

            switch (status) {
                case 401:
                case 404:
                default:
                    errorCallBack && errorCallBack(status, responseObj);
                    break;
                case 200:
                    successCallBack && successCallBack(responseObj);
                    break;
            }

        });

        this.xhr.addEventListener("error", (...args) => {
            console.info("ERROR")
            errorCallBack && errorCallBack(this.xhr.status, args);
        });

        this.xhr.addEventListener("timeout", (...args) => {
            console.info("TIMEOUT")
            errorCallBack && errorCallBack(this.xhr.status, args);
        });

        this.xhr.open(method, url);
        this.xhr.setRequestHeader("Content-Type", "application/json");
        this.xhr.setRequestHeader("Access-Control-Allow-Methods", "*");

        this.xhr.send(body);
    }

    get(url, params, successCallBack, errorCallBack) {
        const fullurl = compileQuery(url, params);
        this.send(fullurl, "GET", successCallBack, errorCallBack);
    }
    
    post(url, body, successCallBack, errorCallBack) {
        const bodyString = JSON.stringify(body);
        this.send(url, "POST", successCallBack, errorCallBack, bodyString);
    }
}

const req = new Request(); 
export { req };