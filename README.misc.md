# JavaScript exercises

## Micellaneous Functions
This exercise helps you understand how  we use built-in functions, and statements like:
- switch-case
- functions as function parameters
- Date methods: getTime, getDay,  
- array methods: reduce, filter, forEach

### Prerequisites for these exercises:
- Date class and its methods/properties
- Arrow functions
- some of Array functions
- functions as function parameters

### The Task
You need to complete your tasks in misc.js in array folder, no need to modify any other files.

### Run the code
To check your functions in browser, run misc.html in a browser, it will import the required javascript file
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

    npm test <test name>

for the whole array exercises, you run

    npm test misc

If you want to run the tests related to a specific function, type either of these:

    npm test weekOfDay
    npm test isWeekend
    npm test compareDates
    npm test formatDate
    npm test daysBetween
    npm test numberToText
    npm test forEach

Once done, you'll see the results for many inputs, and will tell you why isn't it failed.
Run this test before you start working, and you'll see all failing. 
Your task is to turn all tests from red to green

Have fun!