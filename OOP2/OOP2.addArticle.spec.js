let oop = require('./OOP2');

describe("OOP2", () => {
    describe("addArticle", () => {
        let articleList, art1, art2, art3;

        beforeEach(() => {
            articleList = [];
            art1 = new oop.Article("title", "lead", "body", "sect");
            art2 = new oop.Article("title2", "lead2", "body2", "sect2");
            art3 = new oop.Article("title2", "lead2", "body2", "sect2");
        });

        it("should throw when not proper params passed", () => {


            expect(() => {
                oop.addArticle("invalid", art1);
            }).toThrow();

            expect(() => {
                oop.addArticle(articleList, "not an article");
            }).toThrow();
        });

        it("should add article only once", () => {
            oop.addArticle(articleList, art1);
            oop.addArticle(articleList, art2);

            expect(articleList.length).toEqual(2);

            oop.addArticle(articleList, art1);

            expect(articleList.length).toEqual(2);

            let al = oop.addArticle(articleList, art3);

            expect(al.length).toEqual(3);

        });
    })
});