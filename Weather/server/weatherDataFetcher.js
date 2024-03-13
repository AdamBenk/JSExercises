
import sampleData from "./data/sample-data.js";

export default class WeatherDataFetcher {
    weatherData;

    async fetch(params) {
        try {
            return sampleData
        } catch(err) {
            throw "Read Error: "+ err.message;
        }
    }
}