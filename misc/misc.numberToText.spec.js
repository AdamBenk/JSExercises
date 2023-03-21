let miscFns = require('./misc');

describe("Misc", () => {
    describe("function numberToText", () => {
        it("should not handle negative numbers", () => {
            expect(miscFns.numberToText(-1)).toBe("INVALID");
        });

        it("should return INVALID when input is invalid", () => {
            expect(miscFns.numberToText({})).toBe("INVALID");
            expect(miscFns.numberToText([])).toBe("INVALID");
            expect(miscFns.numberToText(null)).toBe("INVALID");
            expect(miscFns.numberToText(undefined)).toBe("INVALID");
            expect(miscFns.numberToText()).toBe("INVALID");
            expect(miscFns.numberToText(true)).toBe("INVALID");
            expect(miscFns.numberToText("5")).toBe("INVALID");
        });

        it("should return proper value", () => {
            expect(miscFns.numberToText(5610)).toBe("fivethousand-sixhundred-ten");
            expect(miscFns.numberToText(5611)).toBe("fivethousand-sixhundred-eleven");
            expect(miscFns.numberToText(5613)).toBe("fivethousand-sixhundred-thirteen");
            expect(miscFns.numberToText(5621)).toBe("fivethousand-sixhundred-twenty-one");
            expect(miscFns.numberToText(1234)).toBe("onethousand-twohundred-thirty-four");
            expect(miscFns.numberToText(1234)).toBe("onethousand-twohundred-thirty-four");
            expect(miscFns.numberToText(999)).toBe("ninehundred-ninety-nine");
            expect(miscFns.numberToText(65)).toBe("sixty-five");

        });

        it("should return properly for 1 digit numbers", () => {
            expect(miscFns.numberToText(0)).toBe("zero");
            expect(miscFns.numberToText(1)).toBe("one");
            expect(miscFns.numberToText(2)).toBe("two");
            expect(miscFns.numberToText(3)).toBe("three");
            expect(miscFns.numberToText(4)).toBe("four");
            expect(miscFns.numberToText(5)).toBe("five");
            expect(miscFns.numberToText(6)).toBe("six");
            expect(miscFns.numberToText(7)).toBe("seven");
            expect(miscFns.numberToText(8)).toBe("eight");
            expect(miscFns.numberToText(9)).toBe("nine");
        });

        it("should return properly for 2 digit exceptions", () => {
            expect(miscFns.numberToText(11)).toBe("eleven");
            expect(miscFns.numberToText(12)).toBe("twelve");

        });
        it("should return properly for 2 digit numbers", () => {
            expect(miscFns.numberToText(10)).toBe("ten");
            expect(miscFns.numberToText(20)).toBe("twenty");
            expect(miscFns.numberToText(30)).toBe("thirty");
            expect(miscFns.numberToText(40)).toBe("forty");
            expect(miscFns.numberToText(50)).toBe("fifty");
            expect(miscFns.numberToText(60)).toBe("sixty");
            expect(miscFns.numberToText(70)).toBe("seventy");
            expect(miscFns.numberToText(80)).toBe("eighty");
            expect(miscFns.numberToText(90)).toBe("ninety");
        });

        it("should return properly for hundreds", () => {
            expect(miscFns.numberToText(100)).toBe("hundred");
            expect(miscFns.numberToText(200)).toBe("twohundred");
        });
    })
});