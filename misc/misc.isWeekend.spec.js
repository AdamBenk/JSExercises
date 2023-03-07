let miscFns = require('./misc');

describe("Misc", () => {
    describe("function isWeekend", () => {
        it("should return proper data for all the 7 days", () => {
            expect(miscFns.isWeekend(new Date(2022,10,2))).toBe(false);
            expect(miscFns.isWeekend(new Date(2022,2,5))).toBe(true);
            expect(miscFns.isWeekend(new Date(2022,2,4))).toBe(false);
            expect(miscFns.isWeekend(new Date(2022,2,3))).toBe(false);
            expect(miscFns.isWeekend(new Date(2022,2,2))).toBe(false);
            expect(miscFns.isWeekend(new Date(2022,2,1))).toBe(false);
            expect(miscFns.isWeekend(new Date(2022,1,28))).toBe(false);
            expect(miscFns.isWeekend(new Date(2022,1,27))).toBe(true);

        });

        it("should return INVALID when input is invalid", () => {
            expect(miscFns.isWeekend(undefined)).toBe("INVALID");
            expect(miscFns.isWeekend(null)).toBe("INVALID");
            expect(miscFns.isWeekend(1)).toBe("INVALID");
            expect(miscFns.isWeekend({})).toBe("INVALID");
            expect(miscFns.isWeekend([])).toBe("INVALID");
            expect(miscFns.isWeekend("2022-11-11")).toBe("INVALID");
        });
    })
});