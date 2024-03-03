import fs from "node:fs/promises";

export default class WeatherDataFetcher {
    weatherData;

    async fetch(params) {
        try {
            return await fs.readFile("./data/sample-data.json");
        } catch(err) {
            throw "Read Error";
        }
    }
}