let oop = require('./OOP2');

describe("OOP2", () => {
    describe("findBySection", () => {
        it("should return the proper articles", () => {
            const art1 = new oop.Article("title", "lead", "body", "sect");
            const art2 = new oop.Article("title2", "lead2", "body2", "sect2");
            const art3 = new oop.Article("title2", "lead2", "body2", "sect2");
            const art4 = new oop.Article("title2", "lead2", "body2", "sect1");
            const art5 = new oop.Article("title2", "lead2", "body2", "sect2");
            const art6 = new oop.Article("title2", "lead2", "body2", "sect3");
            const articles = [];
            oop.addArticle(articles, art1);
            oop.addArticle(articles, art2);
            oop.addArticle(articles, art3);
            oop.addArticle(articles, art4);
            oop.addArticle(articles, art5);
            oop.addArticle(articles, art6);

            const list = oop.findBySection(articles, 'sect2');

            expect(list.length).toEqual(3);
        });

        it("should return throw when wrong articlelist provided", () => {
            expect(() => {
                findBySection("not an articlelist", new oop.Article("title", "lead", "body", "sect"));
            }).toThrow();
        });

        it("should return throw when wrong article provided", () => {
            expect(() => {
                findBySection([], "not an article");
            }).toThrow();
        });
    })
});