
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



// You can and should modify code below!
// Difficulty: 1-5
    /**
     * Difficulty: 1
     * Write a function that requires a parameter (Date type) and returns a string of the following:
     * 
     * "Monday" or "Tuesday" ... "Sunday"
     *
     * If date is not a Date type, then return "INVALID"
     * Implement it using switch-case statement!
     *
     * HINT: check operator instanceof for verifying variable type is a specific type
     * 
     * Related materials:
     *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
     *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
     *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
     *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
     */
    function weekOfDay(date) {
        return; // returns string : "Monday" or "Tuesday" ... "Sunday"
    }

    /**
     * Difficulty: 1 
     * Write a function to test whether a date is a weekend. 
     * input variable "date" is a Date type object, that represents a given date
     * It returns a boolean variable
     * 
     * Usage Example:
     * 
     * const date = new Date(2022, 10, 2); // <- this is 2022, nov 2, months starts with 0, 10=nov
     * 
     * console.info(isWeekend(date));
     * 
     * prints false, because it's wednesday
     *
     * HINT: check operator instanceof for verifying variable type is a specific type
     * 
     * Related material:
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
     * 
     */
    function isWeekend(date) {
        return; // boolean: true or false
    }

    /**
     * Difficulty: 1
     * Write a JavaScript function to compare dates (i.e. greater than, less than or equal to)
     * 
     * return 1 when date 1 > date 2
     * return -1 when date 1 < date 2
     * return 0 when date1 = date2
     *
     * return 0 if ANY of input dates is not a date object
     *
     * HINT: check operator instanceof for verifying variable type is a specific type
     *
     * Related Material:
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
     */
    function compareDates(date1, date2) {
        return; // return number: 1 or -1 or 0
    }

    /**
     * Difficulty: 2
     * Create a function that takes a Date object and returns a string in the format "YYYY-MM-DD".
     * months are always 2 characters long: 01,02,03...12, days also: 01,02,03...31
     *
     * Return "INVALID" when input date is not a Date object
     * HINT: getMonth always returns a number 0-11, not 1-12!
     * HINT: consider using getFullYear, getMonth, getDate, and padStart
     */
    function formatDate(date) {
        return; // return string: like "2000-11-12"
    }

    /**
     * Difficulty: 3
     * Create a function that takes two Date objects and returns the number of days between them.
     * Return "INVALID" if ANY of input dates is not a date object
     * It should accept input either when date1 > date2 or date2 > date1
     *
     * HINT: before searching on the internet, try to solve it by yourself
     * HINT: use of getTime might help!
     */
    function daysBetween(date1, date2) {
        return; // return number: 1, 13 or 57 or any other number
    }

    /**
     * Difficulty: 3
     * Write a function that requires a number and it returns a string of text version of the given number like:
     * 
     * console.log(numberToText(1224))
     * 
     * will print:
     * 
     * onethousand-twohundred-twenty-four
     * 
     * Don't handle negative numbers. If number is negative, return undefined
     * If input param "num" is not a number, return "INVALID"
     * You need to handle numbers between 0-9999
     * If the number is out of boundaries, return "INVALID"
     * 
     * HINT: start from the smallest digit
     * HINT: might be easier to convert number to string first, but not really necessary
     * HINT: use string concatenation
     * HINT: you might consider using string reduce
     */
    function numberToText(num) {
        return; // return a string with written numbers
    }

    /**
     * Difficulty 3
     * Write a function that implements array's forEach() method, without using forEach method.
     * It requires an arr array, and iterates through its items and calls callback on each item.
     * 
     * Usage Example:
     * 
     * const books = ["Ady osszes", "Jokai: Fekete Gyemantok", "Mora: kincskereso kiskodmon"]
     *
     * What we expect from the function you write, to work the way like this:
     *
     * forEach(books, (book) => {
     *     console.log(book)
     * });
     * 
     * It will print:
     * 
     * Ady osszes, 
     * Jokai: Fekete Gyemantok 
     * Mora: kincskereso kiskodmon
     * 
     */
    function forEach(arr, callback) {
        return; // no need to return anything
    }

    if (typeof window !== "undefined") {
        const wOD = new Date(2022,10,2);
        console.info(weekOfDays(wOD));
    }

    // DO NOT COMMENT OUT BELOW LINES
    return {
        weekOfDay,
        isWeekend,
        compareDates,
        daysBetween,
        formatDate,
        numberToText,
        forEach
    };
}));
