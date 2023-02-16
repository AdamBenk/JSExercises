# JavaScript exercises

These exercises makes you understand how array and array methods work in JS.

### Prerequisites for these exercises:
- Array class and its methods/properties
- Arrow functions
- functions as function parameters
- Concept of stack and queue


You can find info about stack and queue, here:
https://www.telerik.com/blogs/stack-queue-javascript

### The Task
You need to complete your tasks in array.js in array folder, no need to modify any other files.

### Run the code
To check your functions in browser, run array.html in a browser, it will import the required javascript file
and run it. You will see the results in the console

However you can complete the exercise using node and npm. Open a powershell/cmd console, go to the root
dir of the exercise folder and run the following command:

    npm run array

this will result the same as console in browser. You can use whichever you like.

### Version Controlling
Please commit your code once one of your function is done. In this case you'll have one commit for each tasks.
You commit your code only when all the related tests for a particular function are green. You can read 
information about testing below.

### Testing
Before committing/pushing your solutions, you need to run unit tests against your functions/methods/programs
to do this, you need to use npm in a powershell/cmd console:

    npm run <test name>

for the whole array exercises, you run

    npm test array

if you want to run the tests related to a specific function, type either of them:

    npm test mostFrequent
    npm test reverse
    npm test reverse2
    npm test removeItems
    npm test compact
    npm test addAll

Once done, you'll see the results for many inputs, and will tell you why isn't it failed.
Run this test before you start working, and you'll see all failing. Your task is to turn all tests from red to green

Have fun!