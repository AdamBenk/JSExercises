
import sampleData from "./data/sample-data.js";
import axios from 'axios';

export default class WeatherDataFetcher {
    
    async fetch(params) {
        return await axios.get('https://api.open-meteo.com/v1/forecast?latitude=47.5198&longitude=19.0222&hourly=temperature_2m')
        .then(response => {
            //console.info("Show me the fucking response data:", response.data)
            return response.data;
        });
        /*try {
            //console.info(sampleData)
            return sampleData
        } catch(err) {
            throw "Read Error: "+ err.message;
        }*/
    }
}