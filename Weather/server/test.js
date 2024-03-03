import WeatherDataFetcher from "./weatherDataFetcher.js";

const fetcher = new WeatherDataFetcher();

run();

async function run() {
    console.info(await fetcher.fetch());    
}