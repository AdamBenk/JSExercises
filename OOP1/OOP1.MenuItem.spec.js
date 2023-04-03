let oop = require('./OOP1');

describe("OOP1", () => {
    describe("MenuItem", () => {
        const testLabel = "testlabel";
        const testUrl = "testUrl";
        const testClass = "testClass";

        it("should have properties", () => {
            // GIVEN
            // WHEN
            const menuItem = new oop.MenuItem(testLabel, testUrl, testClass);

            // THEN
            expect(menuItem.label).toBe(testLabel)
            expect(menuItem.href).toBe(testUrl)
            expect(menuItem.className).toBe(testClass);
            expect(menuItem.template).toBe("<li class=\"{{class}}\">a href=\"{{href property}}\">{{label property}}</a></li>");
        });

        it("should generate proper template", () => {
            // GIVEN
            // WHEN
            const menuItem = new oop.MenuItem(testLabel, testUrl, testClass);

            // THEN
            expect(menuItem.render()).toBe("<li class=\"testClass\">a href=\"testUrl\">testlabel</a></li>");

        });
    })
});