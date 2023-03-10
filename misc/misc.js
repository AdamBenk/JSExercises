
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
        if (!(date instanceof Date)) {
            return "INVALID";
        }

        switch (date.getDay()) {
            case 0:
                return "Sunday";
            case 1:
                return "Monday";
            case 2:
                return "Tuesday";
            case 3:
                return "Wednesday";
            case 4:
                return "Thursday";
            case 5:
                return "Friday";
            case 6:
                return "Saturday";
        }// returns string : "Monday" or "Tuesday" ... "Sunday"
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
        const day = date.getDay();

        return (date instanceof Date) ?
            day === 0 || day === 6 :
            "INVALID";
        // boolean: true or false
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
        const firstValid = date1 instanceof Date;
        const secondValid = date2 instanceof Date;

        if (!firstValid || !secondValid) {
            return 0;
        }

        if (date1.getTime() > date2.getTime()) {
            return 1;
        } else if (date1.getTime() < date2.getTime()) {
            return -1;
        } else {
            return 0;
        }
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
        if (!(date instanceof Date)) {
            return "INVALID";
        }

        let numberOfMonth = padStart(String(date.getMonth() + 1));
        let numberOfDay = padStart(String(date.getDate()));

        return `${date.getFullYear()}-${numberOfMonth}-${numberOfDay}`;
    }

    function padStart(str) {
        if (str.length < 2) {
            return `0${str}`;
        } else {
            return str;
        }
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
        const firstValid = date1 instanceof Date;
        const secondValid = date2 instanceof Date;

        if (!firstValid || !secondValid) {
            return "INVALID";
        }

        let firstTime = date1.getTime();
        let secondTime = date2.getTime();

        if (date1 > date2) {
            return (firstTime - secondTime) / 1000 / 3600 / 24;
        } else {
            return (secondTime - firstTime) / 1000 / 3600 / 24;
        }    
        // return number: 1, 13 or 57 or any other number
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
    /*function numberToText(num) {
        if (!(typeof num === "number") || num < 0 || num > 9999) {
            return "INVALID";
        }

        let Ones = num % 10;
        let Tens = Math.floor(num % 100 / 10); 
        let Hundreds = Math.floor(num % 1000 / 100);
        let Thousands = Math.floor(num % 10000 / 1000);

        let firstDigit;
        if (Ones === 0) {
            firstDigit = "";
        }
        if (Ones === 1) {
            firstDigit = "one";
        }
        if (Ones === 2) {
            firstDigit = "two";
        }
        if (Ones === 3) {
            firstDigit = "three";
        }
        if (Ones === 4) {
            firstDigit = "four";
        }
        if (Ones === 5) {
            firstDigit = "five";
        }
        if (Ones === 6) {
            firstDigit = "six";
        }
        if (Ones === 7) {
            firstDigit = "seven";
        }
        if (Ones === 8) {
            firstDigit = "eight";
        }
        if (Ones === 9) {
            firstDigit = "nine";
        }

        let secondDigit;
        if (Tens === 0) {
            secondDigit = "";
        } 
        if (Tens === 1) {
            secondDigit = "";
        } 
        if (Tens === 2) {
            secondDigit = "twenty";
        } 
        if (Tens === 3) {
            secondDigit = "thirty";
        } 
        if (Tens === 4) {
            secondDigit = "fourty";
        } 
        if (Tens === 5) {
            secondDigit = "fifty";
        } 
        if (Tens === 6) {
            secondDigit = "sixty";
        } 
        if (Tens === 7) {
            secondDigit = "seventy";
        } 
        if (Tens === 8) {
            secondDigit = "eighty";
        } 
        if (Tens === 9) {
            secondDigit = "ninety";
        } 
        
        let firstDash;
        if (secondDigit !== "" && firstDigit !== "") {
            firstDash = "-";
        } else {
            firstDash = ""
        }

        let thirdDigit;
        if (Hundreds === 0) {
            thirdDigit = "";
        }
        if (Hundreds === 1) {
            thirdDigit = "onehundred";
        }
        if (Hundreds === 2) {
            thirdDigit = "twohundred";
        } 
        if (Hundreds === 3) {
            thirdDigit = "threehundred";
        } 
        if (Hundreds === 4) {
            thirdDigit = "fourhundred";
        } 
        if (Hundreds === 5) {
            thirdDigit = "fivehundrred";
        } 
        if (Hundreds === 6) {
            thirdDigit = "sixhundred";
        } 
        if (Hundreds === 7) {
            thirdDigit = "sevenhundred";
        } 
        if (Hundreds === 8) {
            thirdDigit = "eigthhundred";
        } 
        if (Hundreds === 9) {
            thirdDigit = "ninehundred";
        } 

        let secondDash;
        if (thirdDigit !== "" && secondDigit !== "") {
            secondDash = "-";
        } else {
            secondDash = ""
        }

        let fourthDigit;
        if (Thousands === 0) {
            fourthDigit = "";
        }
        if (Thousands === 1) {
            fourthDigit = "onethousand";
        }
        if (Thousands === 2) {
            fourthDigit = "twothousand";
        } 
        if (Thousands === 3) {
            fourthDigit = "threethousand";
        } 
        if (Thousands === 4) {
            fourthDigit = "fourthousand";
        } 
        if (Thousands === 5) {
            fourthDigit = "fivethousand";
        } 
        if (Thousands === 6) {
            fourthDigit = "sixthousand";
        } 
        if (Thousands === 7) {
            fourthDigit = "seventhousand";
        } 
        if (Thousands === 8) {
            fourthDigit = "eigththousand";
        } 
        if (Thousands === 9) {
            fourthDigit = "ninethousand";
        } 

        let thirdDash;
        if (fourthDigit !== "" && thirdDigit !== "") {
            thirdDash = "-";
        } else {
            thirdDash = ""
        }

        const exceptionsTeens = 
            Ones === 0 ||
                Ones === 1 || 
                    Ones === 2 ||
                        Ones === 3 || 
                            Ones === 5 || 
                                Ones === 8; 
        let lastTwoDigits; 
        if (Tens === 1 && Ones === 0) {
            lastTwoDigits = "ten"
        }
        if (Tens === 1 && Ones === 1) {
            lastTwoDigits = "eleven"
        }
        if (Tens === 1 && Ones === 2) {
            lastTwoDigits = "twelve"
        }
        if (Tens === 1 && Ones === 3) {
            lastTwoDigits = "thirteen"
        } 
        if (Tens === 1 && Ones === 5) {
            lastTwoDigits = "fifteen"
        } 
        if (Tens === 1 && Ones === 8) {
            lastTwoDigits = "eighteen"
        } 
        if (Tens === 1 && !exceptionsTeens) {
            lastTwoDigits = firstDigit + "teen"
        }

        let exceptionDash; 
        if (thirdDigit !== "") {
            exceptionDash = "-";
        } else {
            exceptionDash = "";
        }
        
        if (num === 0) {
            return "zero"
        }
        if (num === 100) {
            return "hundred"
        }
        if (num === 1000) {
            return "thousand";
        }
        if (Tens === 1) { 
            return fourthDigit.concat(thirdDash, thirdDigit, exceptionDash, lastTwoDigits);
        } else {
            return fourthDigit.concat(thirdDash, thirdDigit, secondDash, secondDigit, firstDash, firstDigit);
        }
       
           
 // return a string with written numbers
    }*/

    function numberToText(num) {
        if (!(typeof num === "number") || num < 0 || num > 9999) {
            return "INVALID";
        }
        
        const digits = String(num).split('') .map(Number)
          
        let newArray =[];
        digits.forEach(digit => {
            if (digit === 0) {
                newArray.push("zero");
            }
            if (digit === 1) {
                newArray.push("one");
            }
            if (digit === 2) {
                newArray.push("two");
            }
            if (digit === 3) {
                newArray.push("three");
            }
            if (digit === 4) {
                newArray.push("four");
            }
            if (digit === 5) {
                newArray.push("five");
            }
            if (digit === 6) {
                newArray.push("six");
            }
            if (digit === 7) {
                newArray.push("seven");
            }
            if (digit === 8) {
                newArray.push("eight");
            }
            if (digit === 9) {
                newArray.push("nine");
            }
        })

        let newArray2 = [];
        if (newArray[newArray.length - 2] === "one") {
            newArray2.unshift(writeTeens(newArray[newArray.length - 2], newArray[newArray.length - 1]));
        }
        if (newArray[newArray.length - 2] !== "one" && newArray[newArray.length - 1] !== "zero") {
            newArray2.unshift(newArray[newArray.length - 1]);
        }
        if (newArray[newArray.length - 2] !== "one" && newArray[newArray.length - 2] !== "zero" && newArray[newArray.length - 2] !== undefined) {
            newArray2.unshift(writeTens(newArray[newArray.length - 2]));
        }
        if (newArray[newArray.length - 3] !== undefined) {
            newArray2.unshift(newArray[newArray.length - 3].concat("hundred"));
        }
        if (newArray[newArray.length - 4] !== undefined) {
            newArray2.unshift(newArray[newArray.length - 4].concat("thousand"));
        }

        if (num === 0) {
            return "zero";
        }
        if (num === 100) {
            return "hundred";
        }
        if (num === 1000) {
            return "thousand"
        } else {
        return newArray2.join("-");
        }
    }

    function writeTeens(tens, ones) {
        
        const isTeens = tens === "one";
        
        if (tens === "zero") {
            return ones;
        }
        if (isTeens && ones === "zero") {
            return "ten";
        }
        if (isTeens && ones === "one") {
            return "eleven";
        }
        if (isTeens && ones === "two") {
            return "twelve";
        }
        if (isTeens && ones === "three") {
            return "thirteen";
        }
        if (isTeens && ones === "five") {
            return "fifteen";
        }
        if (isTeens && ones === "eight") {
            return "eighteen";
        } 
        if (isTeens && (ones === "four" || ones === "six" || ones === "seven" || ones === "nine")) {
            return ones + "teen"
        }
    }

    function writeTens(tens) {
        if (tens === "two") {
            return "twenty";
        }
        if (tens === "three") {
            return "thirty";
        }
        if (tens === "four") {
            return "fourty";
        }
        if (tens === "five") {
            return "fifty";
        }
        if (tens === "six") {
            return "sixty";
        }
        if (tens === "seven") {
            return "seventy";
        }
        if (tens === "eight") {
            return "eighty";
        }
        if (tens === "nine") {
            return "ninety";
        }
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
        for (i = 0; i < arr.length; i++) {
            callback(arr[i]);
        } 
        
        return; // no need to return anything
    }

    if (typeof window !== "undefined") {
        const wOD = new Date(2022,10,2);
        /*console.info("Day on date 02/11/2022 is", weekOfDay(wOD));*/
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
