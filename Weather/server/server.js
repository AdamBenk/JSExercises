import express from 'express';
import bodyParser from "express";
import WeatherDataFetcher from "./weatherDataFetcher.js";
import WeatherDataConverter from "./weatherDataConverter.js";
import ResponseComposer from "./ResponseComposer.js";


/*

1. setup express.js, so it has an entry point for 
    - providing weather forecast data for Budapest
2. on demand 
    - get data from open weather API
    - convert it to the proper format
    - provide it to the frontend
3. write tests
 */



const app = express();
// create weatherdatafetcher and put it in a variable
// create weatherdataconverter and put it in a variable
const fetcher = new WeatherDataFetcher();
const converter = new WeatherDataConverter();
const composer = new ResponseComposer();

app.use(bodyParser.json()); // Middleware to parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

app.get("/weather-data", async (req, res) => {
    const rawData = await fetcher.fetch();
    const convertedData = converter.convert(rawData);
    const response = composer.compose(res, convertedData);

    res.send(response);

    console.log("Provide weather forecast data.");
});

app.listen(8088, () => {
    console.log("Weather Server Application has started.");
});