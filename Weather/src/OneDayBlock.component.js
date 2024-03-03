export default class OneDayBlock {
    dayName;
    weather;
    wholeRangeLowTemp;
    wholeRangeHighTemp;
    dailyLowTemp;
    dailyHighTemp; 
    
    constructor(fiveDayData, weeklyLowTemp, weeklyHighTemp) {
        this.dayName = fiveDayData.dayName;
        this.weather = fiveDayData.weather;
        this.wholeRangeLowTemp = weeklyLowTemp;
        this.wholeRangeHighTemp = weeklyHighTemp;
        this.dailyLowTemp = fiveDayData.dailyLowTemp;
        this.dailyHighTemp = fiveDayData.dailyHighTemp; 
    }

    midTempCalc() {
            return this.wholeRangeLowTemp + (this.wholeRangeHighTemp - this.wholeRangeLowTemp) / 2;
    }

    dailyLowCalc() {
        return this.wholeRangeLowTemp + (this.midTempCalc() - this.dailyLowTemp);
    }

    render() { 
        const dailyLowCalc = this.dailyLowCalc();
        const leftBarMax = this.midTempCalc();
        const rightBarMin = leftBarMax;

        return `<div class="dayForecast">
                    <div class="day">${this.dayName}</div>
                    <div class="smallIcon">
                        <img src=${this.weather} alt="">
                    </div>
                    <div class="lowTemp">${this.dailyLowTemp} C°</div>
                    <meter class="leftMeter" min="${this.wholeRangeLowTemp}" max="${leftBarMax}" value="${dailyLowCalc}" low="" high="" optimum=""></meter>
                    <meter class="rightMeter" min="${rightBarMin}" max="${this.wholeRangeHighTemp}" value="${this.dailyHighTemp}" low="" high="" optimum=""></meter>
                    <div class="highTemp">${this.dailyHighTemp} C°</div>
                </div>`;
    }
}