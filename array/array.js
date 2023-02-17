
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

    /*
        Write a function that returns the most frequent string item in an array
        If an array item is not a string then ignore it!
        if the length of the input param "arr" is 0, return undefined

        Example:
        console.log(mostFrequent(["1","2","3","4","5","6","7","3","3","3"]))
        returns "3", because "3" is the most frequent item
     */
    function mostFrequent(arr) {
        
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
    const input = ["a", "b", "c", undefined, 'd', 'b'];

    console.info("mostFrequent:", mostFrequent(input));
    console.info("reverse", reverse(input));
    console.info("reverse2", reverse2(input));
    console.info("compact", compact(input));
    console.info("removeItems", removeItems(input, 1,2,3, [])); // change parameters whatever you see fit!
    console.info("addAll", addAll(input));

    return {
        mostFrequent: mostFrequent,
        reverse: reverse,
        reverse2: reverse2,
        compact: compact,
        removeItems: removeItems,
        addAll: addAll
    };

}));
