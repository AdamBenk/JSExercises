let oop = require('./OOP1');

describe("OOP1", () => {
    describe("Menu", () => {
        it("should render properly", () => {
            // GIVEN
            const menu = new oop.Menu("menu");

            // WHEN
            menu.addItem(new oop.MenuItem("item 1", "telex.hu", "menu-item"));
            menu.addItem(new oop.MenuItem("item 2", "index.hu", "menu-item"));

            // THEN
            expect(menu.render()).toBe(
                "<ul class=\"menu\"><li class=\"menu-item\">a href=\"telex.hu\">item 1</a></li>" +
                "<li class=\"menu-item\">a href=\"index.hu\">item 2</a></li></ul>"
            );
        });

        it("should have items", () => {
            // GIVEN
            const menu = new oop.Menu("menu");
            const spy = jest.spyOn(console, "error");

            // WHEN
            menu.addItem(new oop.MenuItem("item 1", "telex.hu", "menu-item"));
            menu.addItem(new oop.MenuItem("item 1", "telex.hu", "menu-item"));
            menu.addItem("menu-item");
            menu.addItem(new oop.BaseMenuItem("item 1", "telex.hu", "menu-item"));

            // THEN
            expect(spy).toBeCalledTimes(2);
            expect(menu.items.length).toBe(2);
        });

        it("should render proper className", () => {
            // GIVEN
            const menu = new oop.Menu("menu");

            // WHEN
            menu.className = "test-menu"
            // THEN
            expect(menu.render()).toBe("<ul class=\"test-menu\"></ul>");

            // WHEN
            menu.className = "test-menu-two";

            // THEN
            expect(menu.render()).toBe("<ul class=\"test-menu-two\"></ul>");

            // WHEN
            menu.addItem(new oop.MenuItem("item 1", "telex.hu", "menu-item"));

            // THEN
            expect(menu.render()).toBe("<ul class=\"test-menu-two\"><li class=\"menu-item\">a href=\"telex.hu\">item 1</a></li></ul>");
        });
    });
});