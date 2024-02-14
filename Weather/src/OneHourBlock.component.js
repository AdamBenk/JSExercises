export class OneHourBlock {
    time;
    weather;
    temp;

    constructor(hourlyDisplayData) {
        this.time = hourlyDisplayData.time;
        this.weather = hourlyDisplayData.weather;
        this.temp = hourlyDisplayData.temp;
    }

    render() { 
        return `<div class="hourlyReport">
                    <div class="hour">${this.time}</div>
                    <div class="smallIcon">
                        <img src=${this.weather} alt="">
                    </div>
                    <div class="currentTemp">${this.temp}</div>
                </div>`;
    }
}
