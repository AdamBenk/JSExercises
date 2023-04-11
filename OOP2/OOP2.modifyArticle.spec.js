let oop = require('./OOP2');

describe("OOP2", () => {
    describe("setAuthor", () => {
        it("should set createdBy and modifiedBy", () => {
            const art = new oop.Article("title-1", "lead-1", "body-1", "sect-1");
            const title2 = "t2";
            const lead2 = "l2";
            const body2 = "b2";
            const sect2 = "s2";

            oop.setAuthor(art, "Adam");
            oop.modifyArticle(art, title2, lead2, body2, sect2, "Tom");

            expect(art.title).toEqual(title2);
            expect(art.lead).toEqual(lead2);
            expect(art.body).toEqual(body2);
            expect(art.section).toEqual(sect2);

            expect(art.modifiedBy).toEqual(["Adam", "Tom"]);
        });
    })
});