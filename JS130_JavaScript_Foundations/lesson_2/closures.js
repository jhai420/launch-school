"use strict";

// let logName = () => {
//   console.log(name);
// }

// logName();

// var name = "John";

function makeAdder(firstNumber) {
  return function(secondNumber) {
    return firstNumber + secondNumber
  };
}

let addFive = makeAdder(5);
let addTen = makeAdder(10);

// console.log(addFive(3));  // 8
// console.log(addFive(55)); // 60
// console.log(addTen(3));   // 13
// console.log(addTen(55));  // 65

// 1. What do the 4 console.log statements at the end of this program print? Try to answer without running the code:

// The code will log 1, 2, 3, 4 because the counter variable is a global variable. 
// Even though 'incrementCounter' is reassigned to another invocation of the 'makeCounter' function, 
// the variable stored in a global scope retains its value 

let counter = 0;

function makeCounter() {
  return function() {
    counter += 1;
    return counter;
  }
}

let incrementCounter = makeCounter();
// console.log(incrementCounter()); // 1
// console.log(incrementCounter()); // 2

// incrementCounter = makeCounter(); 
// console.log(incrementCounter()); // 3
// console.log(incrementCounter()); // 4


// 2. Let's modify our program a little by moving the let statement into the function returned by makeCounter. 
// What do the 4 console.log statements at the end of this program print? Try to answer without running the code:

// The code will log 1, 1, 1, 1 because the counter variable will be reset to 0 each time 'incrementCounter' is invoked. 

function makeCounter2() {
  return function() {
    let counter = 0;
    counter += 1;
    return counter;
  }
}


// 3. Let's move the variable declaration into makeCounter now. 
// What do the 4 console.log statements at the end of this program print? Try to answer without running the code:

// The code will log 1, 2, 1, 2. The incrementCounter function will reset when it is reassigned to another makeCounter3 function.

function makeCounter3() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  }
}

// 4. We'll now make some changes to how we create the output. 
// What do the 4 console.log statements at the end of this program print? Try to answer without running the code:

// Will log 1, 2, 1, 2


function makeCounter4() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  }
}

let incrementCounter1 = makeCounter4();
let incrementCounter2 = makeCounter4();

// console.log(incrementCounter1());
// console.log(incrementCounter1());

// console.log(incrementCounter2());
// console.log(incrementCounter2());

// Write a function named makeMultipleLister that you can call with a number as an argument. 
// The function should return a new function that, when invoked, logs every positive integer multiple of that number less than 100. 
// It should work like this:

function makeMultipleLister(number) {
  return function() {
    for (let multiple = number; multiple < 100; multiple += number) {
      console.log(multiple);
    }
  }
}

let lister = makeMultipleLister(17);
//lister();

// Output: 17, 34, 51, 68, 85 

// 6.  Write a program that uses two functions, add and subtract, to manipulate a running total. 
// When you invoke either function with a number, it should add or subtract that number from the running 
// total and log the new total to the console. It should work like this:

let total = 0;

function add(number) {
  total += number;
  console.log(total);
}

function subtract(number) {
  total -= number;
  console.log(total);
}


// add(1);       // 1
// add(42);      // 43
// subtract(39); // 4
// add(6);       // 10

// 7. Without running the following code, determine what value it logs on the last line. 
// Explain how the program arrived at that final result.

// 150 is the final result. The value of 'bar' starts off as 2. 
// The value then accumulates each time it is called with a number - the previous result is multiiplied by the value passed in. 

function foo(start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
}

let bar = foo(2); // 2
let result = bar(3); // 6
result += bar(4); // 6 + 24 = 30
result += bar(5); // 30 + 120 = 150
//console.log(result); // 150

// 8. Write a function named later that takes two arguments: a function and an argument for that function. 
// The return value should be a new function that calls the input function with the provided argument, like this:

function later(callback, argument) {
  return () => callback(argument);
}

const logger = message => console.log(message);
let logWarning = later(logger, "The system is shutting down!");
//logWarning(); // The system is shutting down!

// 9. Write a function named later2 that takes two arguments: a function and an argument for that function. 
// The return value should be a new function that also takes an argument. 
// The new function should call the input function with the argument provided to later2 and the argument provided to the returned function. 
// For example:

function later2(func, arg) {
  return arg2 => func(arg, arg2)
}

const notify = function(message, when) {
  console.log(`${message} in ${when} minutes!`);
};

let shutdownWarning = later2(notify, "The system is shutting down");
//shutdownWarning(30); // The system is shutting down in 30 minutes!

// 10. The built-in Function.prototype.bind method performs partial function application by 
// allowing you to specify some of the function's arguments when you invoke bind.
// It also permanently binds the new function to a specific execution context with its first argument. 
// That binding is, in a sense, also an example of partial function application. 
// Here, the "argument" we're applying to the function is the function's execution context.

// Write a function that emulates the context binding aspect of bind. 
// That is, your version of bind should merely call the function with the desired context; 
// it doesn't need to pass any arguments to the function. Here's how you can use your function:

function bind(context, func) {
  return () => func.call(context);
}

let obj = {};
let boundFunc = bind(obj, function() {
  this.foo = "bar";
});

boundFunc();
console.log(obj); // { foo: 'bar' }