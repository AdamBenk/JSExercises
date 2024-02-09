import { SearchBar} from "./SearchBar.component.js";
import { CurrentWeather} from "./CurrentWeather.component.js";
import { DailyForecast } from "./DailyForecast.component.js";
import { FiveDayForecast } from "./FiveDayForecast.component.js";

window.addEventListener("load", onLoad);

function onLoad() {
    const searchBarContainer = document.querySelector(".headerLine");
    const searchBar = new SearchBar(searchBarContainer); 
    searchBarContainer.innerHTML = searchBar.render(); 

    const currentWeatherContainer = document.querySelector(".currentWeather")
    const currentWeatherCmp = new CurrentWeather({
        temp: "13 C°",
        icon: "icons/cloud-rain-icon.svg",
        location: "Bundy Drive",
        time: "10:45°",
        highTemp: "15 C°", 
        lowTemp: "5 C°",
    });
    currentWeatherContainer.innerHTML = currentWeatherCmp.render(); 

    const dailyData = [{
        time: "0:00",
        weather: "icons/cloud-rain-icon.svg",
        temp: "10 C°"
    }, {
        time: "1:00",
        weather: "icons/cloud-rain-icon.svg",
        temp: "11 C°"
    },
    {
        time: "2:00",
        weather: "icons/cloud-rain-icon.svg",
        temp: "11 C°"
     },
     {
        time: "3:00",
        weather: "icons/cloud-rain-icon.svg",
        temp: "12 C°"
     },
     {
        time: "4:00",
        weather: "icons/cloud-rain-icon.svg",
        temp: "13 C°"
     },
     {
        time: "5:00",
        weather: "icons/cloud-rain-icon.svg",
        temp: "13 C°"
     },
     {
        time: "6:00",
        weather: "icons/cloud-rain-icon.svg",
        temp: "14 C°"
     },
     {
        time: "7:00",
        weather: "icons/cloud-rain-icon.svg",
        temp: "15 C°"
     },
     {
        time: "8:00",
        weather: "icons/cloud-rain-icon.svg",
        temp: "15 C°"
     }]; 
    
    const dailyFlow = document.querySelector(".dailyFlow")
    const leftArrow = document.querySelector("#leftArrow")
    const rightArrow = document.querySelector("#rightArrow")
    const dailyForecast = new DailyForecast(dailyData);
    dailyForecast.addArrows(leftArrow, rightArrow); 
    dailyFlow.innerHTML = dailyForecast.render();

    const fiveDayData = [{
        dayName: "Today",
        weather: "icons/cloud-rain-icon.svg",
        dailyLowTemp: 5,
        dailyHighTemp: 15, 
    }, {
        dayName: "Monday",
        weather: "icons/cloud-rain-icon.svg",
        dailyLowTemp: 7,
        dailyHighTemp: 12, 
    },
    {
        dayName: "Tuesday",
        weather: "icons/cloud-rain-icon.svg",
        dailyLowTemp: 8,
        dailyHighTemp: 19, 
     },
     {
        dayName: "Wednesday",
        weather: "icons/cloud-rain-icon.svg",
        dailyLowTemp: 3,
        dailyHighTemp: 12, 
     },
     {
        dayName: "Thursday",
        weather: "icons/cloud-rain-icon.svg",
        dailyLowTemp: 2,
        dailyHighTemp: 10, 
     },
    ];

    const forecastFlow = document.querySelector(".forecastFlow");
    const fiveDayForecast = new FiveDayForecast(fiveDayData);
    forecastFlow.innerHTML = fiveDayForecast.render();
}

