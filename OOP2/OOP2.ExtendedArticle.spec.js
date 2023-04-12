let oop = require('./OOP2');

describe("OOP2", () => {
    describe("ExtendedArticle", () => {
        let testTitle;
        let testLead;
        let testBody;
        let testSection;
        let article;

        beforeEach(() => {
            testTitle = "testtitle";
            testLead = "testlead";
            testBody = "testbody";
            testSection = "testsection";
            article = new oop.ExtendedArticle(testTitle, testLead, testBody, testSection);
        });

        it("should inherited from Article", () => {
            expect(article).toBeInstanceOf(oop.Article);
            expect(article).toBeInstanceOf(oop.ExtendedArticle);
        });

        it("Should call the super and set the properties", () => {
            expect(article.title).toBe(testTitle);
            expect(article.lead).toBe(testLead);
            expect(article.body).toBe(testBody);
            expect(article.section).toBe(testSection);
            expect(article.created).toBeInstanceOf(Date);
            expect(article.modified).toBeInstanceOf(Date);
            expect(article.createdBy).toEqual("");
            expect(article.modifiedBy).toEqual([]);
        });

        describe("setAuthor", () => {
            it("should set createdBy and modifiedBy", () => {
                const art = new oop.ExtendedArticle("title", "lead", "body", "sect");

                art.setAuthor("Adam");

                expect(art.createdBy).toEqual("Adam");
                expect(art.modifiedBy).toEqual(["Adam"]);
            });

            it("should set createdBy and modifiedBy, even if modifiedBy was set", () => {
                const art = new oop.ExtendedArticle("title", "lead", "body", "sect");

                art.modifiedBy = ["somebody else"];

                art.setAuthor("Adam");

                expect(art.createdBy).toEqual("Adam");
                expect(art.modifiedBy).toEqual(["Adam"]);
            });
        });

        it("should modify the article", () => {
            const art = new oop.ExtendedArticle("title-1", "lead-1", "body-1", "sect-1");
            const title2 = "t2";
            const lead2 = "l2";
            const body2 = "b2";
            const sect2 = "s2";

            art.setAuthor("Adam");
            art.modify(title2, lead2, body2, sect2, "Tom");

            expect(art.title).toEqual(title2);
            expect(art.lead).toEqual(lead2);
            expect(art.body).toEqual(body2);
            expect(art.section).toEqual(sect2);

            expect(art.modifiedBy).toEqual(["Adam", "Tom"]);
        });

        it("should set deleted flag", () => {
            const art = new oop.ExtendedArticle("title", "lead", "body", "sect");

            expect(art.deleted).toEqual(false);

            art.delete();

            expect(art.deleted).toEqual(true);
        });
    });
});
