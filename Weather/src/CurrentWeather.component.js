export class CurrentWeather {
    temp;
    icon;
    location;
    time;
    highTemp;
    lowTemp;

    constructor(propValues) {
        this.setProps(propValues);
    }

    setProps(propValues) {
        this.temp = propValues.temp;
        this.location = propValues.location;
        this.time = propValues.time;
        this.date = propValues.date;
        this.highTemp = propValues.highTemp;
        this.lowTemp = propValues.lowTemp;
    }

    render() {
        return `<div class="tempAndIcon">
                    <div class="temp">${this.temp}</div>
                    <div class="bigIcon">
                        <img src=${this.icon} alt="">
                    </div>
                </div>
                <div class="location">${this.location}</div>
                <div class="currentTimeCoordinates">
                    <div class="currentTime">${this.time}</div>
                    <div class="highTemp">${this.highTemp}</div>
                    <div class="lowTemp">${this.lowTemp}</div>
                </div>`;
    }
}