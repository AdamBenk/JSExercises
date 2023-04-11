let oop = require('./OOP2');

describe("OOP2", () => {
    describe("deleteArticle", () => {
        it("should set deleted flag", () => {
            const art = new oop.Article("title", "lead", "body", "sect");

            expect(art.deleted).toEqual(false);

            oop.deleteArticle(art);

            expect(art.deleted).toEqual(true);
        });
    })
});