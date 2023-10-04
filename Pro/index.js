/**
 * How can the Promise class help us? First off, everyone uses it because it is now the standard way to deal with
 * asynchronous code... so we have to use it. Following the standard is always the best thing to do. Now that we
 * know that, here is a simple example of how to use a promise.
 *
 * var promise = new Promise(function(resolve, reject) {
 *     setTimeout(function() {
 *         resolve('hello world');
 *     }, 2000);
 * });
 *
 * promise.then(function(data) {
 *     console.log(data);
 * });
 *
 * *********************************************************************************************************************
 * As you shown above, you can use the resolve function to fullfil the promise.
 * The then function binds a callback to the promise and you can use the data given to the resolve function.
 *
 * You can bind multiples callbacks:
 *
 * var promise = new Promise(function(resolve, reject) {
 *     setTimeout(function() {
 *         resolve('hello world');
 *     }, 2000);
 * });
 *
 * promise.then(function(data) {
 *     console.log(data + ' 1');
 * });
 *
 * promise.then(function(data) {
 *     console.log(data + ' 2');
 * });
 *
 * promise.then(function(data) {
 *     console.log(data + ' 3');
 * });
 *
 * *********************************************************************************************************************
 * The reject function is used to trigger an error. When you use then, you can give 2 functions. The first function is
 * used when the promise exits successfully. The second function is used when the promise encounters an error.
 *
 * var promise = new Promise(function(resolve, reject) {
 *     setTimeout(function() {
 *         reject('We are all going to die');
 *     }, 2000);
 * });
 *
 * promise.then(function success(data) {
 *     console.log(data);
 * }, function error(data) {
 *     console.error(data);
 * });
 *
 * *********************************************************************************************************************
 * You can still bind multiple then methods:
 *
 * var promise = new Promise(function(resolve, reject) {
 *     setTimeout(function() {
 *         reject('We are all going to die');
 *     }, 2000);
 * });
 *
 * promise.then(function success(data) {
 *     console.log(data + ' 1');
 * }, function error(data) {
 *     console.error(data + ' 1');
 * });
 *
 * promise.then(function success(data) {
 *     console.log(data + ' 2');
 * }, function error(data) {
 *     console.error(data + ' 2');
 * });
 *
 * promise.then(function success(data) {
 *     console.log(data + ' 3');
 * }, function error(data) {
 *     console.error(data + ' 3');
 * });
 *
 * *********************************************************************************************************************
 * You can call resolve and reject multiple times, but this is useless. Once a promise is finished, it can't restart.
 *
 * var promise = new Promise(function(resolve, reject) {
 *     setTimeout(function() {
 *         resolve('hello world 1');
 *         resolve('hello world 2');
 *         resolve('hello world 3');
 *         resolve('hello world 4');
 *     }, 1000);
 * });
 *
 * promise.then(function success(data) {
 *     console.log(data);
 * });
 *
 * *********************************************************************************************************************
 */







/**
 * Let's do some practice with a simple exercise. You must modify the code below based on the following rules:
 *
 * The function job must return a promise object (you are in a NodeJS environment, you can use new Promise)
 * The promise must resolve itself 2 seconds after the call to job and must provide hello world in the data
 * Change the code to return a promise
 */
function exercise1() {

}

/**
 * Let's do a harder exercise. In this code, your function receives a parameter data.
 * You must modify the code below based on the following rules:
 *
 * Your function must always return a promise
 * If data is not a number, return a promise rejected instantly and give the data "error" (in a string)
 * If data is an odd number, return a promise resolved 1 second later and give the data "odd" (in a string)
 * If data is an even number, return a promise rejected 2 seconds later and give the data "even" (in a string)
 */
function exercise2() {

}