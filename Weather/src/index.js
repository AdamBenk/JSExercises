import { SearchBar} from "./SearchBar.component.js";
import { CurrentWeather} from "./CurrentWeather.component.js";
import { DailyForecast } from "./DailyForecast.component.js";
import WeeklyForecast from "./WeeklyForecast.component.js";
import SlideArrow from "./SlideArrow.component.js";
import DataFetcherFrontend from "./DataFetcherFrontend.component.js";

window.addEventListener("load", onLoad);

function onLoad() {
   const fetcher = new DataFetcherFrontend;
   fetcher.fetch().then((data) => {
      const searchBarContainer = document.querySelector(".headerLine");
      const searchBar = new SearchBar(searchBarContainer); 
      searchBarContainer.innerHTML = searchBar.render(); 

      const currentWeatherContainer = document.querySelector(".currentWeather")
      const currentWeatherCmp = new CurrentWeather(data.currentWeather
      /*{
        temp: "13 C°",
        icon: "icons/cloud-rain-icon.svg",
        location: "Bundy Drive",
        time: "10:45",
        highTemp: "15 C°", 
        lowTemp: "5 C°",
      }*/
      );
      currentWeatherContainer.innerHTML = currentWeatherCmp.render(); 

      const dailyData = data.dailyForecast;
      
      const hourlyFlow = document.querySelector(".hourlyFlow");
      const dailyForecast = new DailyForecast(dailyData);
      hourlyFlow.innerHTML = dailyForecast.render();

      const leftArrow = document.querySelector("#leftArrow")
      const rightArrow = document.querySelector("#rightArrow")
      const leftSlider = new SlideArrow(leftArrow, hourlyFlow, "left", 4);
      leftSlider.init();
      const rightSlider = new SlideArrow(rightArrow, hourlyFlow, "right", 4)
      rightSlider.init();

      const fiveDayData = data.weeklyForecast;

      const dailyFlow = document.querySelector(".dailyFlow");
      const weeklyForecast = new WeeklyForecast(fiveDayData);
      dailyFlow.innerHTML = weeklyForecast.render();

      const topArrow = document.querySelector("#topArrow")
      const downArrow = document.querySelector("#downArrow")
      const topSlider = new SlideArrow(topArrow, dailyFlow, "top", 6);
      topSlider.init();
      const downSlider = new SlideArrow(downArrow, dailyFlow, "down", 6)
      downSlider.init();
   });
}   


