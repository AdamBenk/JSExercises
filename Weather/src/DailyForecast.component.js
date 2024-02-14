import {OneHourBlock} from "./OneHourBlock.component.js";

export class DailyForecast {
    dailyData;

    constructor(dailyData) {
        this.dailyData = dailyData;
    }

    render() {
        let hourlyDisplays = [];

        this.dailyData.forEach((oneDailyData) => {
            hourlyDisplays.push(new OneHourBlock(oneDailyData));
        });

        return hourlyDisplays.map(hourlyDisplay => hourlyDisplay.render()).join('');

    }
}