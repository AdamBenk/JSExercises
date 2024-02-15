import { SearchBar} from "./SearchBar.component.js";
import { CurrentWeather} from "./CurrentWeather.component.js";
import { DailyForecast } from "./DailyForecast.component.js";
import { WeeklyForecast } from "./WeeklyForecast.component.js";
import { SlideArrow } from "./SlideArrow.component.js";

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
     },
     {
      time: "9:00",
      weather: "icons/cloud-rain-icon.svg",
      temp: "16 C°"
   },{
      time: "10:00",
      weather: "icons/cloud-rain-icon.svg",
      temp: "17 C°"
   },
   {
      time: "11:00",
      weather: "icons/cloud-rain-icon.svg",
      temp: "18 C°"
   },
   {
      time: "12:00",
      weather: "icons/cloud-rain-icon.svg",
      temp: "19 C°"
   },]; 
   
    const hourlyFlow = document.querySelector(".hourlyFlow");
    const dailyForecast = new DailyForecast(dailyData);
    hourlyFlow.innerHTML = dailyForecast.render();

    const leftArrow = document.querySelector("#leftArrow")
    const rightArrow = document.querySelector("#rightArrow")
    const leftSlider = new SlideArrow(leftArrow, hourlyFlow, "left", 4);
    leftSlider.init();
    const rightSlider = new SlideArrow(rightArrow, hourlyFlow, "right", 4)
    rightSlider.init();

    const fiveDayData = [{
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
     {
      dayName: "Thursday",
      weather: "icons/cloud-rain-icon.svg",
      dailyLowTemp: 2,
      dailyHighTemp: 10, 
     },
     {
      dayName: "Friday",
      weather: "icons/cloud-rain-icon.svg",
      dailyLowTemp: 2,
      dailyHighTemp: 10, 
     },
     {
      dayName: "Saturday",
      weather: "icons/cloud-rain-icon.svg",
      dailyLowTemp: 2,
      dailyHighTemp: 10, 
     },
     {
      dayName: "Sunday",
      weather: "icons/cloud-rain-icon.svg",
      dailyLowTemp: 2,
      dailyHighTemp: 10, 
   }
    ];

    const dailyFlow = document.querySelector(".dailyFlow");
    const weeklyForecast = new WeeklyForecast(fiveDayData);
    dailyFlow.innerHTML = weeklyForecast.render();

    const topArrow = document.querySelector("#topArrow")
    const downArrow = document.querySelector("#downArrow")
    const topSlider = new SlideArrow(topArrow, dailyFlow, "top", 6);
    topSlider.init();
    const downSlider = new SlideArrow(downArrow, dailyFlow, "down", 6)
    downSlider.init();
}

