export class OneDayBlock {
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


    midTempCalc(lowTemp, highTemp) {
        if (lowTemp <= 0 && highTemp <= 0) {
            return lowTemp + (Math.abs(lowTemp) - Math.abs(highTemp)) / 2;
        } else if (lowTemp <= 0 && highTemp >= 0) {
            return lowTemp + (Math.abs(lowTemp) + highTemp) / 2;
        } else if (lowTemp >= 0 && highTemp >= 0) {
            return lowTemp + (highTemp - lowTemp) / 2;
        }
    }

    dailyLowCalc(fiveDayLow, fiveDayHigh, dailyLow) {
        return fiveDayLow + (this.midTempCalc(fiveDayLow, fiveDayHigh) - dailyLow);
    }

    render() { 
        return `<div class="dayForecast">
                    <div class="day">${this.dayName}</div>
                    <div class="smallIcon">
                        <img src=${this.weather} alt="">
                    </div>
                    <div class="lowTemp">${this.dailyLowTemp} C°</div>
                    <meter class="leftMeter" min="${this.wholeRangeLowTemp}" max="${this.midTempCalc(this.wholeRangeLowTemp, this.wholeRangeHighTemp)}" 
                        value="${this.dailyLowCalc(this.wholeRangeLowTemp, this.wholeRangeHighTemp, this.dailyLowTemp)}" low="" high="" optimum=""></meter>
                    <meter class="rightMeter" min="${this.midTempCalc(this.wholeRangeLowTemp, this.wholeRangeHighTemp)}" max="${this.wholeRangeHighTemp}" value="${this.dailyHighTemp}" low="" high="" optimum=""></meter>
                    <div class="highTemp">${this.dailyHighTemp} C°</div>
                </div>`;
    }
}