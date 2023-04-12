let oop = require('./OOP2');

describe('ArticleList', () => {
    let article1;
    let article2;
    let articleList;

    beforeEach(() => {
        article1 = new oop.ExtendedArticle('Article 1', 'This is the lead for Article 1', 'This is the body for Article 1', 'Section 1');
        article2 = new oop.ExtendedArticle('Article 2', 'This is the lead for Article 2', 'This is the body for Article 2', 'Section 2');
        articleList = new oop.ArticleList();
    });

    describe('constructor', () => {
        test('should create an empty list of articles', () => {
            expect(articleList.articles).toEqual([]);
        });
    });

    describe('addArticle', () => {
        test('should add an article to the list', () => {
            articleList.addArticle(article1);
            expect(articleList.articles).toContain(article1);
        });

        test('should throw an error if article is not an Article object', () => {
            expect(() => articleList.addArticle({ title: 'Not an Article', section: 'Section 3' })).toThrow();
        });

        test('should not add an article that already exists in the list', () => {
            articleList.addArticle(article1);
            articleList.addArticle(article1);
            expect(articleList.articles).toHaveLength(1);
        });
    });

    describe('deleteArticle', () => {
        test('should delete an article from the list', () => {
            articleList.addArticle(article1);
            articleList.addArticle(article2);
            articleList.deleteArticle(1);
            expect(articleList.articles).toEqual([article1]);
        });
    });

    describe('findBySection', () => {
        test('should return an array of articles with matching section', () => {
            articleList.addArticle(article1);
            articleList.addArticle(article2);
            const result = articleList.findBySection('Section 2');
            expect(result).toEqual([article2]);
        });

        test('should return an empty array if no matching section is found', () => {
            articleList.addArticle(article1);
            articleList.addArticle(article2);
            const result = articleList.findBySection('Section 3');
            expect(result).toEqual([]);
        });
    });
});