import OneDayBlock from "../src/OneDayBlock.component";

describe("OneDayBlock",() => {

    describe("should return the middle value of the temperature range", () => {
        
        it("both low and max are negative", () => {
            const lowTemp = -11;
            const maxTemp = -5;
            const oneDayBlock = new OneDayBlock({}, lowTemp, maxTemp);
            expect(oneDayBlock.midTempCalc()).toBe(-8);
        });
        it("one is negative, one is positive", () => {
            const lowTemp = -11;
            const maxTemp = 7;
            const oneDayBlock = new OneDayBlock({}, lowTemp, maxTemp);
            expect(oneDayBlock.midTempCalc()).toBe(-2);
        });
        it("highTemp is zero", () => {
            const lowTemp = -11;
            const maxTemp = 0;
            const oneDayBlock = new OneDayBlock({}, lowTemp, maxTemp);
            expect(oneDayBlock.midTempCalc()).toBe(-5.5);
        });
        it("lowTemp is zero", () => {
            const lowTemp = 0;
            const maxTemp = 11;
            const oneDayBlock = new OneDayBlock({}, lowTemp, maxTemp);
            expect(oneDayBlock.midTempCalc()).toBe(5.5);
        });
        it("both are postivie", () => {
            const lowTemp = 2;
            const maxTemp = 13;
            const oneDayBlock = new OneDayBlock({}, lowTemp, maxTemp);
            expect(oneDayBlock.midTempCalc()).toBe(7.5);
        });
    });

    describe("should return a value for the low of the leftMeter", () => {

        it("should be weekly low + (weekly mid - daily low)", () => {
            const lowTemp = 2;
            const maxTemp = 13;
            const dailyLowTemp = 4;
            const oneDayBlock = new OneDayBlock({ dailyLowTemp }, lowTemp, maxTemp);
            expect(oneDayBlock.dailyLowCalc()).toBe(5.5);
        })
    })
}); 