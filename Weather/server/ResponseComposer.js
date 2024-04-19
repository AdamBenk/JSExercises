import fs from "node:fs/promises";

export default class ResponseComposer {
    constructor() {}
    compose(res, body) {
        res.set({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': 'OPTIONS,GET,HEAD,POST,PUT,DELETE'
        });
        //console.info("This is res:", res)
        return body;
    }
}