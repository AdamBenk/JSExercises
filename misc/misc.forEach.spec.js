let miscFns = require('./misc');

describe("Misc", () => {
    describe("function forEach", () => {
        it("should return proper data for all the 7 days", () => {
            const forEach = miscFns.forEach;
            let sum = 0;

            forEach([1,2,3], (a) => { sum += a });

            expect(sum).toBe(6);
        });
    })
});