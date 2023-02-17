let arrayFns = require('./array');

describe("Array", () => {
    describe("function compact", () => {
        it("should return undefined when input is invalid", () => {
            expect(arrayFns.compact(5)).toEqual(undefined);
            expect(arrayFns.compact(true)).toEqual(undefined);
            expect(arrayFns.compact(new Object())).toEqual(undefined);
            expect(arrayFns.compact(null)).toEqual(undefined);
            expect(arrayFns.compact(undefined)).toEqual(undefined);
        });

        it("should remove multiplications", () => {
            expect(arrayFns.compact([1,1,2])).toEqual([1,2]);
        });

        it("should return empty if empty is given", () => {
            expect(arrayFns.compact([])).toEqual([]);
        });

        it("should remove null, undefined and empty string", () => {
            expect(arrayFns.compact([5, 4, 3, 2, null, undefined, ""])).toEqual([5,4,3,2]);
        });

        it("should remove null, undefined, empty string and multiplications", () => {
            expect(arrayFns.compact([5, 5, 4, 4, 3, 2, 4, null, undefined, ""])).toEqual([5,4,3,2]);
        });
    })
});