let oop = require('./OOP2');

describe("OOP2", () => {
    describe("setAuthor", () => {
        it("should set createdBy and modifiedBy", () => {
            const art = new oop.Article("title", "lead", "body", "sect");

            oop.setAuthor(art, "Adam");

            expect(art.createdBy).toEqual("Adam");
            expect(art.modifiedBy).toEqual(["Adam"]);
        });

        it("should set createdBy and modifiedBy, even if modifiedBy was set", () => {
            const art = new oop.Article("title", "lead", "body", "sect");

            art.modifiedBy = ["somebody else"];

            oop.setAuthor(art, "Adam");

            expect(art.createdBy).toEqual("Adam");
            expect(art.modifiedBy).toEqual(["Adam"]);
        });

        it("should throw an error when not article provided", () => {
            expect(() => {
                oop.setAuthor("not an Article", "Adam");
            }).toThrow();
        });
    })
});