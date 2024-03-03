import express from 'express';
import WeatherDataFetcher from "./weatherDataFetcher.js";
import WeatherDataConverter from "./weatherDataConverter.js";

/*

1. setup express.js, so it has an entry point for 
    - providing weather forecast data for Budapest
2. on demand 
    - get data from open weather API
    - convert it to the proper format
    x provide it to the frontend
3. write tests
 */



const app = express();
// create weatherdatafetcher and put it in a variable
// create weatherdataconverter and put it in a variable

app.get("/weather-data", (req, res) => {
    res.set('Content-Type', 'application/json');
    res.set('Access-Control-Allow-Methods', 'OPTIONS,GET,HEAD,POST,PUT,DELETE');

    // get data
    // convert data

    // send data to client (frontend)
    res.send(JSON.stringify({
        status: "OK"
    }));

    console.log("Provide weather forecast data.");
});

app.listen(8088, () => {
    console.log("Application has started.");
});