import OneDayBlock from "./OneDayBlock.component.js";

export default class WeeklyForecast {
    fiveDayData;
    constructor(fiveDayData) {
        this.fiveDayData = fiveDayData;
    }

    findWholeRangeLow() {
        const weeklyLows = this.fiveDayData.map((oneDayData) => {
            return oneDayData.dailyLowTemp;
        })
        const sortedWeeklyLows = weeklyLows.sort((a, b) => a-b);
        return sortedWeeklyLows[0]
    }

    findWholeRangeHigh() {
        const weeklyHighs = this.fiveDayData.map((oneDayData) => {
            return oneDayData.dailyHighTemp;
        })
        const sortedWeeklyHighs = weeklyHighs.sort((a, b) => a-b);
        return sortedWeeklyHighs[sortedWeeklyHighs.length-1]
    }

    render() {
        let daylyDisplays = [];

        this.fiveDayData.forEach((oneDailyData) => {
            daylyDisplays.push(new OneDayBlock(oneDailyData, this.findWholeRangeLow(), this.findWholeRangeHigh()))
        });

        return daylyDisplays.map(daylyDisplay => daylyDisplay.render()).join('');

    }
}