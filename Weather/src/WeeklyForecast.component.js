import {OneDayBlock} from "./OneDayBlock.component.js";

export default class WeeklyForecast {
    fiveDayData;
    constructor(fiveDayData) {
        this.fiveDayData = fiveDayData;
    }

    findWholeRangeLow(fiveDayData) {
        const weeklyLows = fiveDayData.map((oneDayData) => {
            return oneDayData.dailyLowTemp;
        })
        const sortedWeeklyLows = weeklyLows.sort((a, b) => a-b);
        return sortedWeeklyLows[0]
    }

    findWholeRangeHigh(fiveDayData) {
        const weeklyHighs = fiveDayData.map((oneDayData) => {
            return oneDayData.dailyHighTemp;
        })
        const sortedWeeklyHighs = weeklyHighs.sort((a, b) => a-b);
        return sortedWeeklyHighs[sortedWeeklyHighs.length-1]
    }

    render() {
        let daylyDisplays = [];

        this.fiveDayData.forEach((oneDailyData) => {
            daylyDisplays.push(new OneDayBlock(oneDailyData, this.findWholeRangeLow(this.fiveDayData), this.findWholeRangeHigh(this.fiveDayData)))
        });

        return daylyDisplays.map(daylyDisplay => daylyDisplay.render()).join('');

    }
}