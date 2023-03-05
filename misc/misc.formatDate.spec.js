let miscFns = require('./misc');

describe("Misc", () => {
    describe("function formatDate", () => {
        it("should return proper data for date objects", () => {
            expect(miscFns.formatDate(new Date(2022, 4, 4))).toBe("2022-05-04")

            expect(miscFns.formatDate(new Date(2022, 11, 11))).toBe("2022-12-11")
        });

        it("should return INVALID when date is not a date", () => {
            expect(miscFns.formatDate(null)).toBe("INVALID");
            expect(miscFns.formatDate(undefined)).toBe("INVALID");
            expect(miscFns.formatDate()).toBe("INVALID");
            expect(miscFns.formatDate(4)).toBe("INVALID");
            expect(miscFns.formatDate(false)).toBe("INVALID");
            expect(miscFns.formatDate({})).toBe("INVALID");
            expect(miscFns.formatDate([])).toBe("INVALID");
            expect(miscFns.formatDate("")).toBe("INVALID");
        });
    })
});