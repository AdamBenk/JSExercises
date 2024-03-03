import WeeklyForecast from "../src/WeeklyForecast.component";

describe("WeeklyForecast", () => {
    
    const mockFiveDayData = [{
        dayName: "Monday",
        weather: "icons/cloud-rain-icon.svg",
        dailyLowTemp: 7,
        dailyHighTemp: 12, 
    },
    {
        dayName: "Tuesday",
        weather: "icons/cloud-rain-icon.svg",
        dailyLowTemp: 8,
        dailyHighTemp: 19, 
     },
     {
        dayName: "Wednesday",
        weather: "icons/cloud-rain-icon.svg",
        dailyLowTemp: 3,
        dailyHighTemp: 12, 
     },
     {
        dayName: "Thursday",
        weather: "icons/cloud-rain-icon.svg",
        dailyLowTemp: 2,
        dailyHighTemp: 10, 
     },
     {
      dayName: "Thursday",
      weather: "icons/cloud-rain-icon.svg",
      dailyLowTemp: 2,
      dailyHighTemp: 10, 
     },
     {
      dayName: "Friday",
      weather: "icons/cloud-rain-icon.svg",
      dailyLowTemp: 2,
      dailyHighTemp: 10, 
     },
     {
      dayName: "Saturday",
      weather: "icons/cloud-rain-icon.svg",
      dailyLowTemp: -2,
      dailyHighTemp: 10, 
     },
     {
      dayName: "Sunday",
      weather: "icons/cloud-rain-icon.svg",
      dailyLowTemp: 2,
      dailyHighTemp: 10, 
   }
    ];
    
    test.skip("FiveDayData should have properties", () => {
        expect(mockFiveDayData).toHaveProperty('dayName', 'weather', 'dailyLowTemp', 'dailyHighTemp');
    });

    it("should constructor fill FiveDayData", () => {
        const weeklyForecast = new WeeklyForecast(mockFiveDayData); 

        expect(weeklyForecast.fiveDayData).toBe(mockFiveDayData);
    });
    
    it("should find lowest temp", () => {
        const weeklyForecast = new WeeklyForecast(mockFiveDayData); 
        expect(weeklyForecast.findWholeRangeLow()).toBe(-2);
    });
    
    it("should find highest temp", () => {
        const weeklyForecast = new WeeklyForecast(mockFiveDayData); 
        expect(weeklyForecast.findWholeRangeHigh()).toBe(19);
    });
});