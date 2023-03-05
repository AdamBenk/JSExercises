let miscFns = require('./misc');

describe("Misc", () => {
    describe("function compareDates", () => {
        it("should return 1 if date1 > date2", () => {
            const date1 = new Date(2022, 4, 4);
            const date2 = new Date(2022, 3, 3);

            expect(miscFns.compareDates(date1, date2)).toBe(1);
        });

        it("should return -1 if date1 > date2", () => {
            const date1 = new Date(2022, 3, 4);
            const date2 = new Date(2022, 11, 3);

            expect(miscFns.compareDates(date1, date2)).toBe(-1);
        });

        it("should return 0 if date1 > date2", () => {
            const date1 = new Date(2022, 3, 4);
            const date2 = new Date(2022, 3, 4);

            expect(miscFns.compareDates(date1, date2)).toBe(0);
        });

        it("should return INVALID when input is invalid", () => {
            expect(miscFns.compareDates({}, new Date(2022, 2,2))).toBe(0);
            expect(miscFns.compareDates(new Date(2022, 2,2))).toBe(0);
            expect(miscFns.compareDates()).toBe(0);
            expect(miscFns.compareDates()).toBe(0);
        });
    })
});