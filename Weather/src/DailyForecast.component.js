import {HourlyDisplay} from "./HourlyDisplay.component.js";
import {SlideArrow} from "./SlideArrow.component.js";

export class DailyForecast {
    dailyData;

    constructor(dailyData) {
        this.dailyData = dailyData;
    }
    addArrows(leftArrow, rightArrow) {
        const arrows = new SlideArrow();
        arrows.addListener(leftArrow, rightArrow);
    }

    render() {
        let hourlyDisplays = [];

        this.dailyData.forEach((oneDailyData) => {
            hourlyDisplays.push(new HourlyDisplay(oneDailyData));
        });

        return hourlyDisplays.map(hourlyDisplay => hourlyDisplay.render()).join('');

    }
}