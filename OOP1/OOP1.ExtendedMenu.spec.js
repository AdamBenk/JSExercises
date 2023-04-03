let oop = require('./OOP1');

describe("OOP1", () => {
    describe("ExtendedMenu", () => {
        const item1 = new oop.MenuItem("menu item 1", "localhost", "menuitem");
        const item2 = new oop.MenuItem("menu item 2", "localhost", "menuitem");
        const item3 = new oop.MenuItem("menu item 3", "localhost", "menuitem");

        let menu;

        beforeEach(() => {
            menu = new oop.ExtendedMenu("menu");
        });

        it("should have addItem, and it adds items, only valids", () => {
            // GIVEN
            const spy = jest.spyOn(console, "error");

            // WHEN
            menu.addItems([item1, item2, item3, ""]);

            // THEN
            expect(menu.items.length).toBe(3);
            expect(spy).toBeCalledTimes(1);
        });

        it('should set items when setItems called', () => {
            // GIVEN
            menu.addItems([item1, item2]);
            const newMenuItems = [item1, item1, item3];

            // WHEN
            menu.setItems(newMenuItems);

            // THEN
            expect(menu.items.length).toBe(3);
            expect(menu.items).toBe(newMenuItems);
        });

        it('should remove items', () => {
            // GIVEN
            menu.addItems([item1, item2, item3, item1]);

            // WHEN
            menu.removeItem(0);
            menu.removeItem(1);

            // THEN
            expect(menu.items.length).toBe(2);
            expect(menu.items[0]).toBe(item2);
            expect(menu.items[1]).toBe(item1);
        });
    })
});