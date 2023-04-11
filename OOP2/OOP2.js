
// BEGIN: code that makes your functions run in both browser and node environment. DO NOT MODIFY
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node.js
        module.exports = factory();
    } else {
        // Browser
        root.fns = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    // END: helper code.
    /*
     * Please read the exercises carefully, every word counts, and important!
     * You also need to read the specification of additional features of Javascript called error handling:
     *
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
     * https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/error
     *
     * This exercise focuses on differences between structural programming and OOP. You'll see the differences of both approach
     *
     * We will be building some part of a Newspaper Application both structural and OOP way.
     *
     * For these exercises we use the same data structure:
     *
     * Article:
     * {
     *      title: string,      // the title of the article
     *      lead: string,       // the lead text
     *      created: Date,      // exact datetime when the article was created
     *      modified: Date,     // when it was last modified
     *      createdBy: string   // who created it
     *      modifiedBy: string[]// a list of authors that modified the article
     *      body: string,       // the article text
     *      section: string,    // the section this article related to like "science", "business", "news", "sport"
     *      deleted: boolean    // if true, the article won't be displayed (it's just a flag that tells whether later
     *                             on it should be displayed on the page or not)
     * }
     *
     */
    /* --------------------------------------------------------------------------------------------------------- */

    /*
     * Exercise #1
     * Write a class that represents an article, called Article, like the structure above.
     * It only has properties, but no methods. These kind of classes called POD (Plain Old Data) or DTO (Data Transfer Objects),
     * depending on the context.
     *
     * Its constructor has 4 parameters: title, lead, body, type
     * these fields fill the article fields accordingly, the constructor also sets created and modified field to the
     * current datetime.
     *
     * createdBy and modifiedBy field should remain empty for now (empty string, or array, not undefined)! Pay attention of field types, described above.
     * deleted is false by default!
     */
    class Article {
        title;
        lead;
        created;
        modified;
        createdBy;
        modifiedBy;
        body;
        section;
        deleted;

        constructor(title, lead, body, section) {
            this.title = title;
            this.lead = lead;
            this.body = body;
            this.section = section;
            this.createdBy = "";
            this.modifiedBy = [];
            this.created = new Date();
            this.modified = new Date();
            this.deleted = false;
        }
    }

    /* Exercise #2
     * Write a function that sets the creator and modifier of an article.
     * If the article is not an Article type object, call console.error and do nothing and return
     * It requires an article to modify, and the author as a string, returns a modified article, createdBy and modifiedBy
     * field set to author. Note, that modifiedBy is an array of strings!
     * If article passed already has modifiedBy not empty, clear the field (empty array), and add only the passed author to the list
     *
     */
    function setAuthor(article, author) {
        if (!(article instanceof Article)) {
            throw Error("article is not an Article object");
        }
        article.createdBy = author;

        if (article.modifiedBy.length) {
            article.modifiedBy = [author];
        } else {
            article.modifiedBy.push(author);
        }
        return article;
    }

    /* Exercise #3
     * Write a function that modifies the article, by setting title, lead, body, section and modifiedBy field
     *
     * It requires the article to modify, and the fields above.
     * If this function is called, it sets
     * - the modified date to the current DateTime
     * - adds a new modifier to the modifiedBy array
     * - sets the title, lead, body and section values only if they are not undefined
     *   if any of them is undefined, it won't overwrite the corresponding value.
     * - the function returns the modified article object
     */
    function modifyArticle(article, title, lead, body, section, modifier) {
        if (title !== undefined) { article.title = title; }
        if (lead !== undefined) { article.lead = lead; }
        if (body !== undefined) { article.body = body; }
        if (section !== undefined) { article.section = section; }

        article.modifiedBy.push(modifier);
        article.modified = new Date();

        return article;
    }

    /* Exercise #4
     * Write a function that deletes an article (sets the delete flag to true)
     *
     * It returns the modified article, deleted flag set to true
     */
    function deleteArticle(article) {
        article.deleted = true;

        return article;
    }


    /* The following array will contain articles for our "Newspaper System" */
    const articles = [];


    /* Exercise #5
     * Write a function that adds a new Article to a given list (array)
     *
     * if the article already exist in the list, don't add to the list!
     * if the articleList is not an array then throw an error (Error object) with error message!
     * if the article is not an Article type object then throw an error  with error message!
     */
    function addArticle(articleList, article) {
        if (!(articleList instanceof Array)) {
            throw Error("article list is not an array")
        }

        if (!(article instanceof Article)) {
            throw Error("article is not an Article object");
        }

        if (!articleList.includes(article)) {
            articleList.push(article);
        }

        return articleList;
    }

    /* Exercise #6
     *
     * Write a function that returns all the articles belongs to a specific section
     *
     * if the articleList is not an array then throw an error with error message!
     * if the article is not an Article type object then throw an error with error message!
     * The function returns an array containing all the articles from articleList that belongs to the particular section
     */
    function findBySection(articleList, section) {
        if (!(articleList instanceof Array)) {
            throw Error("article list is not an array")
        }

        return articleList.filter(article => article.section === section);
    }


    // *****************************************************************************************************************************
    // END OF PART 1. IF finished, we'll make a session and talk about the next exercise!
    // *****************************************************************************************************************************

    /* PART2: OOP

     * Exercise #7
     * The exercises below implements the same functionality as the functions and variables you created above, but uses
     * a different approach, using OOP.
     * What you need to do here is to implement 2 classes: ExtendedArticle and ArticleList, and implement the functions
     * as above, but instead of writing separate functions, you will wrap data and methods in one package called classes.
     *
     * Exercise #1
     * Create a new class that extends Article class, called ExtendedArticle, and has the additional methods:
     *
     * setAuthor(author) - it sets the author of the article, see setAuthor above
     * modify(title, lead, body, section, modifier) - it alters the article described above, see modifyArticle function
     * delete() - it sets the deleted flag of the article, described above.
     */
    class ExtendedArticle extends Article {
        setAuthor(author) {
            this.createdBy = author;

            if (this.modifiedBy.length) {
                this.modifiedBy = [author];
            } else {
                this.modifiedBy.push(author);
            }
        }

        modify(title, lead, body, section, modifier) {
            if (title !== undefined) { this.title = title; }
            if (lead !== undefined) { this.lead = lead; }
            if (body !== undefined) { this.body = body; }
            if (section !== undefined) { this.section = section; }

            this.modifiedBy.push(modifier);
            this.modified = new Date();
        }

        delete() {
            this.deleted = true;
        }
    }


     /* Exercise #8
     * Create a new class called ArticleList that will contain the articles for our Newspaper Application.
     * ArticleList class has the following properties:
     *
     * - articles: Article[]   - array of the articles for the Newspaper Application
     *
     * Methods:
     * - addArticle(article)
     *      adds a new article to the list.
     *      if the article already added before, don't add it to the list!
     *      if the article is not an Article type object then throw an error  with error message!
     *
     *
     * - deleteArticle(pos: number)
     *      deletes an article from the list defined by its position
     *
     * - findBySection(section: string)
     *      returns a list of articles (array) that belongs to the specific section ("news", "sport" etc.)
     */
    class ArticleList {
        addArticle(article) {
            if (!(article instanceof Article)) {
                throw Error("article is not an Article object");
            }

            if (!this.articles.includes(article)) {
                this.articles.push(article);
            }
        }

        deleteArticle(pos) {
            this.articles.splice(pos, 1);
        }

        findBySection(section) {
            this.articles.filter(article => article.section === section);
        }
    }

    // DO NOT COMMENT OUT LINES BELOW
    return {
        Article,
        setAuthor,
        modifyArticle,
        deleteArticle,
        addArticle,
        findBySection,
        ExtendedArticle,
        ArticleList
    };
}));
