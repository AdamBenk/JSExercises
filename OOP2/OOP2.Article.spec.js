let oop = require('./OOP2');

describe("OOP2", () => {
    describe("Article", () => {
        it("should have properties", () => {
            const testTitle = "tt";
            const testLead = "tl";
            const testBody = "tb";
            const testSection = "ts"

            const article = new oop.Article(testTitle, testLead, testBody, testSection);

            expect(article.title).toBe(testTitle);
            expect(article.lead).toBe(testLead);
            expect(article.body).toBe(testBody);
            expect(article.section).toBe(testSection);
            expect(article.created instanceof Date).toBe(true);
            expect(article.modified instanceof Date).toBe(true);
            expect(article.deleted).toBe(false);
        });
    })
});