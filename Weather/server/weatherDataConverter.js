
export default class WeatherDataFetcher {
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
    }

    getDailyForecast() {
        return {};
    }

    getWeeklyForecast() {
        return {};
    }
}