let arrayFns = require('./array');

describe("Array", () => {
    describe("function reverse", () => {
        it("empty array returns empty array", () => {
            expect(arrayFns.reverse([])).toEqual([]);
        });

        it("won't reverse the input variable", () => {
            let arr = [1, 2, 3, 4];
            arrayFns.reverse(arr);
            expect(arr).toEqual([1, 2, 3, 4]);
        });

        it("should be reversed order", () => {
            expect(arrayFns.reverse([1,2,3,4,5,6,7,8])).toEqual([8,7,6,5,4,3,2,1]);
        });

        it("should return undefined when input is invalid", () => {
            expect(arrayFns.reverse(5)).toEqual(undefined);
            expect(arrayFns.reverse(true)).toEqual(undefined);
            expect(arrayFns.reverse(new Object())).toEqual(undefined);
            expect(arrayFns.reverse(null)).toEqual(undefined);
            expect(arrayFns.reverse(undefined)).toEqual(undefined);
        });
    })
});