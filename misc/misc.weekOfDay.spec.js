let miscFns = require('./misc');

describe("Misc", () => {
    describe("function weekOfDays", () => {
        it("should return proper string for each days", () => {
            expect(miscFns.weekOfDay(new Date(2022,10,2)).toLowerCase()).toBe("wednesday");
            expect(miscFns.weekOfDay(new Date(2022,2,5)).toLowerCase()).toBe("sunday");
            expect(miscFns.weekOfDay(new Date(2022,2,4)).toLowerCase()).toBe("saturday");
            expect(miscFns.weekOfDay(new Date(2022,2,3)).toLowerCase()).toBe("friday");
            expect(miscFns.weekOfDay(new Date(2022,2,2)).toLowerCase()).toBe("thursday");
            expect(miscFns.weekOfDay(new Date(2022,2,1)).toLowerCase()).toBe("wednesday");
            expect(miscFns.weekOfDay(new Date(2022,1,28)).toLowerCase()).toBe("tuesday");

        });

        it("should return INVALID when input is invalid", () => {
            expect(miscFns.weekOfDay(undefined)).toBe("INVALID");
            expect(miscFns.weekOfDay(null)).toBe("INVALID");
            expect(miscFns.weekOfDay(1)).toBe("INVALID");
            expect(miscFns.weekOfDay({})).toBe("INVALID");
            expect(miscFns.weekOfDay([])).toBe("INVALID");
            expect(miscFns.weekOfDay("2022-11-11")).toBe("INVALID");
        });
    })
});