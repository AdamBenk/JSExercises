let miscFns = require('./misc');

describe("Misc", () => {
    describe("function daysBetween", () => {
        it("should return proper number for everything", () => {
            const date1 = new Date(2022, 3, 3);
            const date2 = new Date(2023, 3, 3);

            expect(miscFns.daysBetween(date1, date2));
        });
    })
});