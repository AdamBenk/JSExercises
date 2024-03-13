import { all } from "axios";

export default class WeatherDataConverter {
    rawData;

    convert(rawData) {
        this.rawData = rawData;

        return {
            currentWeather: this.getCurrentWeatherData(),
            dailyForecast: this.getDailyForecast(),
            weeklyForecast: this.getWeeklyForecast()
        };
    }

    getCurrentWeatherData() {
        return {};
        const date = new Date;
        const dateConverted = String(date.getUTCMilliseconds()).slice(10, 15);
        const hourandMinute = dateConverted.slice(10, 15);
        const allDateValues = Object.values(this.rawData.hourly.time);
        let position; 
        allDateValues.forEach(date => {
            if (date === dateConverted) {
                position = allDateValues.indexOf(date);
            }
        })
        const allTempValues = Object.values(this.rawData.hourly.temperature_2m);
        const currentTemp = allTempValues[position];

        let tempsForDay; 
        for(let i = position; i < 23; i--) {
            tempsForDay += allTempValues[i]; 
        }
        
        return {
            temp: currentTemp,
            icon: "icons/cloud-rain-icon.svg",
            location: "Bundy Drive",
            time: hourandMinute,
            highTemp: Math.max(...tempsForDay).toString(),
            lowTemp: Math.min(...tempsForDay).toString()
        };
    }

    getDailyForecast() {
        return {};
        let dailyData = new Array; // missing (), or use [] instead!
        const allDateValues = Object.values(this.rawData.hourly.time);
        allDateValues.forEach(date => {
            let oneHourBlock = {
                time: "",
                weather: "icons/cloud-rain-icon.svg", 
                temp: "",
            }
            oneHourBlock.time = date.slice(10, 15);
            dailyData.push(oneHourBlock);
        })
        const allTempValues = Object.values(this.rawData.hourly.temperature_2m);
        dailyData.forEach(day => {
            day.temp = allTempValues[dailyData.indexOf(day)];
        })

        return dailyData.slice(0,23);
    }

    getWeeklyForecast() {
        return {};
        let weeklyData = new Array;
        const allDateKeys = Object.keys(this.rawData.hourly.time);
        const allTempValues = Object.values(this.rawData.hourly.temperature_2m);
        allDateKeys.forEach(day => {
            let oneDayBlock = {
                dayName: "",
                weather: "icons/cloud-rain-icon.svg",
                dailyLowTemp: "",
                dailyHighTemp: "", 
            };
            if(day.slice(-2) === "23") {
                oneDayBlock.dayName = this.getDayName(day);
                const dayTemps = allTempValues.slice(allDateKeys.indexOf(day) - 23, allDateKeys.indexOf(day));
                oneDayBlock.dailyLowTemp = Math.min(...dayTemps).toString();
                oneDayBlock.dailyHighTemp = Math.max(...dayTemps).toString();
                weeklyData.push(oneDayBlock);
            };
        });
        
        return weeklyData; 
    }

    getDayName(day) {
            const date = new Date(day);
            switch(date.getDay()) {
                    case 0: 
                        return "Sunday";
                    break;
                    case 1: 
                        return "Monday";
                    break;
                    case 2:
                        return "Tuesday";
                    break;
                    case 3:
                        return "Wednesday";
                    break;
                    case 4:
                        return "Thursday";
                    break;
                    case 5:
                        return "Friday";
                    break;
                    case 6:
                        return "Saturday";
                    break;
            }
    }
}