let oop = require('./OOP1');

describe("OOP1", () => {
    describe("BaseMenuItem", () => {
        it("should have properties", () => {
            const testLabel = "testlabel";
            const testUrl = "testUrl";
            const testClass = "testClass";

            const menuItem = new oop.MenuItem(testLabel, testUrl, testClass);

            expect(menuItem.label).toBe(testLabel)
            expect(menuItem.href).toBe(testUrl)
            expect(menuItem.className).toBe(testClass);
            expect(menuItem.template).toBe();
        });
    })
});