
class Request {
    xhr;
   
    send(url, method, successCallBack, errorCallBack, body = "") {
        this.xhr = new XMLHttpRequest();
        this.xhr.timeout = 3400
        this.xhr.addEventListener("load", () => {
            const responseObj = JSON.parse(this.xhr.responseText);
            successCallBack && successCallBack(responseObj);  

            try {
                this.showError(responseObj.message);
            } catch(e) {
                console.log(e);
            }          
        });

        this.xhr.addEventListener("error", () => {
            errorCallBack && errorCallBack();    
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

    showError(e) {
        if (e === "Login failed") {
            throw new Error("Login failed");
        }

        if (e === "Internal server error") {
            throw new Error("Internal server error");
        }

        if (e === "Login successful") {
            throw new Error("Login successful")
        }
    };
}

const req = new Request(); 
export { req };