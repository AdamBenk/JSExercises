import WeeklyForecast from "../src/WeeklyForecast.component";

describe("WeeklyForecast", () => {
    it("should constructor fill FiveDayData", () => {
        const fiveDayData = [1, 2, 3, 4, 5];
        const weeklyForecast = new WeeklyForecast(fiveDayData); 
    });
    
});