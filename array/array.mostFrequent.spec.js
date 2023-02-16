let arrayFns = require('./array');

describe("Array", () => {
    describe("function mostFrequent", () => {
        it("should work with random items in the array", () => {
            expect(arrayFns.mostFrequent(["1", "2", "3", "4", "5", "1"])).toBe("1");
        });

        it("should return undefined if there's no item in the array", () => {
            expect(arrayFns.mostFrequent([])).toBe(undefined);
        })

        it("should return undefined if there's no remaining item after ignoring invalid ones", () => {
            expect(arrayFns.mostFrequent([undefined, null, 2, null])).toBe(undefined);
        })

        it("should ignore array elements if they are not strings", () => {
            expect(arrayFns.mostFrequent([{}, [], new RegExp("//"), new Number(5)], "3")).toBe("3");
        });

        it("should ignore undefined and null", () => {
            expect(arrayFns.mostFrequent([undefined, null,"4" ,"4" ,"2"])).toBe("4");
        });
    })
});