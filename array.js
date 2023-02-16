/* ****************************************************************************************************************** */

/*  These exercises makes you to learn how array and array methods work

    Prerequisites for these exercises:
    - Array class and its methods/properties
    - Arrow functions
    - functions as function parameters
    - Concept of stack and queue


    You can find info about stack and queue, here:
    https://www.telerik.com/blogs/stack-queue-javascript

    You need to complete your tasks in this file, no need to modify any other files.

    To check your functions in browser, run array.html in a browser, it will import the required javascript file
    and run it. You will see the results in the console

    However you can complete the exercise using node and npm. Open a powershell/cmd console, go to the root
    dir of the exercise folder and run the following command:

    npm run array

    this will result the same as console in browser. You can use whichever you like.

    Please commit your code once one of your function is done. In this case you'll have one commit for each tasks.
    Before committing/pushing your solutions, you need to run unit tests against your functions/methods/programs
    to do this, you need to use npm in a powershell/cmd console:

    npm run <test name>

    for the array exercises, you run

    npm run array

    Once done, you'll see the results for many inputs, and will tell you why isn't it failed.
    You commit your code only when all the related tests for a particular function are green.
    Run this test before you start working, and you'll see all failing. Your task is to turn all tests from red to green

    Have fun!
 */

/* ****************************************************************************************************************** */

/*
    Write a function that returns the most frequent item in an array

    Example:
    console.log(mostFrequent([1,2,3,4,5,6,7,4,5,43,343,4,3,24,31,3,4,21,3,3,1,1,3,3,4,9,7,5,6,7,5,8 ,9,5,6,7,6]))
    returns 3, because 3 is the most frequent item
 */
function mostFrequent(arr) {
    // finish code
}

/*
    Write a function that accepts an array and returns the reversed  array (without using .reverse method!)
    Return undefined, when input is not an array

    Example:  reverse([1,2,3,4,5,6,7,8,9]) returns [9,8,7,6,5,4,3,2,1]

    The result array should be not the same array as the parameter. It means that if considering this:

    let  a1 = [1,2,3,4,5]
    let a2 = reverse(a1);
    console.info(a1)

    should print [1,2,3,4,5] and not [5,4,3,2,1] otherwise it would indicate that a1 and a2 point to the same memory.
    The return array should be a different variable.
 */
function reverse(arr) {
    // finish code
}

/*
    This is the subtask of the previous task:
    implement another function that modifies the original input variable, and does not create a new one!
    So using the example above console.log(a1) would print [5,4,3,2,1]
 */
function reverse2(arr) {
    // finish code
}

/*
    Write a function that compacts an array the following way:
    - removes all undefined, null and empty string, [“”, undefined, null] should return []
    - removes all multiplications, so [3,3,3] should turn into [3]
    - the function returns undefined if the input parameter is not an array

 */
function compact(arr) {
    // finish code
}

/*
    Write a function that removes values from an array

    function removeItems(array, a,b,c,d, ….. x,y,z, ….)

    The function may have 1 or more. The first parameter (arr) is the array, all the rest is the variables you should remove from the array.

    Example:

    removeItems([1,2,3,4,5,6], 5) returns [1,2,3,4,6]
    removeItems([1,2,3,4,5,6,7,8,9], 2,3,4,5) returns [1,6,7,8,9]

    - if only 1 parameters is given (the array), the function should return the copy of the original array
    - if there’s at least 2 or more parameters, return the filtered array
    - the first parameter must be an array, otherwise the function should return undefined
    - the second and other parameters must be a primitive value like string, number, boolean, null or undefined. If not, the invalid ones should be ignored.

 */
function removeItems(arr /* finish function declaration */) {
    // finish code
}

/*
    Write a function that calculate the sum of all numbers in an array!

    - don’t use for-loop
    - consider using Array’s forEach method
    - consider using .reduce method!
    - function must be able to process arrays in arrays in any depth
      addAll([1,2,[3,4],[5,6],[7,[8,9]]]) returns 47
 */
function addAll(arr) {
    // finish code
}

// use any input or modify the code below whatever you like
const input = [1,2,3,4,5,6]

console.info("mostFrequent:", mostFrequent(input));
console.info("reverse", reverse(input));
console.info("reverse2", reverse2(input));
console.info("compact", compact(input));
console.info("removeItems", removeItems(input, 1,2,3, [])); // change parameters whatever you see fit!
console.info("addAll", addAll(input));
