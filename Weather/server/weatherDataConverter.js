export default class WeatherDataConverter {
    rawData;
    timeRange; 
    tempValues;

    convert(rawData) {
        this.rawData = rawData;
        console
        this.timeRange = Object.values(this.rawData.hourly.time);
        this.tempValues = Object.values(this.rawData.hourly.temperature_2m);
        return {
            currentWeather: this.getCurrentWeatherData(),
            dailyForecast: this.getDailyForecast(),
            weeklyForecast: this.getWeeklyForecast()
        };
    }

    getCurrentWeatherData() {
        const currentTime = new Date(Date.now()).toISOString().slice(0, 13);
        const position = this.getPositionInTimeRange(currentTime);
        const currentTemp = this.tempValues[position];
        const tempsForDay = this.getTempsForCalendarDay(position)
        
        return {
            temp: `${currentTemp} C°`,
            icon: "icons/cloud-rain-icon.svg",
            location: "Bundy Drive",
            time: new Date(Date.now()).toISOString().slice(11, 16),
            highTemp: `H: ${Math.max(...tempsForDay).toString()} C°`,
            lowTemp: `L: ${Math.min(...tempsForDay).toString()} C°`
        };
    }

    getDailyForecast() {
        let dailyData = []; 
        this.timeRange.forEach(date => {
            dailyData.push({
                time: `${date.slice(12, 16)}`,
                weather: "icons/cloud-rain-icon.svg", 
                temp: "",
            });
        })
        
        dailyData.forEach(day => {
            day.temp = `${this.tempValues[dailyData.indexOf(day)]} C°`;
        })
        return dailyData.slice(0,23);
    }

    getWeeklyForecast() {
        let weeklyData = [];
        
        const days = this.timeRange.reduce((prev, curr, index)=> {

            const dateStr = curr.slice(0,10);
        
            if (prev[dateStr]) {
                prev[dateStr].push(this.tempValues[index]);
            } else {
                prev[dateStr] = [this.tempValues[index]];
            }
            return prev;
        }, {});

        const dayTemps = Object.entries(days)

        dayTemps.forEach(day => {
            console.info("This is a day:", day[0])
            const date = new Date(day[0]);
            weeklyData.push({
                dayName: `${this.getDayName(date.getDay())}`,
                weather: "icons/cloud-rain-icon.svg",
                dailyLowTemp: `${Math.max(...Object.values(day[1])).toString()}`,
                dailyHighTemp: `${Math.min(...Object.values(day[1])).toString()}` 
            });
        })
        return weeklyData; 
    }

    getDayName(day) {
        return [
         "Sunday",
         "Monday", 
         "Tesday", 
         "Wednesday", 
         "Thursday", 
         "Friday", 
         "Saturday"
        ][day] 
    }

    getPositionInTimeRange(timeToBeFound) {
        let position;
        this.timeRange.forEach(time => {
            if (time.slice(0, 13) === timeToBeFound) {
                position = this.timeRange.indexOf(time);  
            }
        })
        return position;
    }

    getTempsForCalendarDay(pos) {
        let tempsForDay = []; 
        for(let i = pos; i >= 0; i--) {
            tempsForDay.push(this.tempValues[i]); 
        }
        for(let i = pos + 1; i <= 23; i++) {
            tempsForDay.push(this.tempValues[i]); 
        }
        return tempsForDay;
    }
}