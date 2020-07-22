// 1. What values do the following expressions evaluate to?

false || (true && false); // false
true || (1 + 2); // true
(1 + 2) || true; // (1 + 2) 
true && (1 + 2); // (1 + 2) 
false && (1 + 2); // false
(1 + 2) && true; // true
(32 * 4) >= 129; // false 
false !== !true; // false
true === 4; // true - X false
false === (847 === '847'); // true
false === (847 == '847'); // false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; 
  (!true || (!20 === 20) || (82 === 82)) || false
  (false || false || true) || false 
  true || false // true

// 2. Write a function, evenOrOdd, that determines whether its argument is an even number. 
// If it is, the function should log 'even' to the console; otherwise, it should log 'odd'. 
// For now, assume that the argument is always an integer.


// 3. Let's improve our previous implementation of evenOrOdd. 
// Add a validation check to ensure that the argument is an integer. 
// If it isn't, the function should issue an error message and return.

// 4. What does the following code log to the console, and why?

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

// 5. Refactor this statement to use an if statement instead.

return foo() ? 'bar' : qux();

// 6. What does this code output to the console?

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
   console.log('Empty');
  }
}

isArrayEmpty([]);   // [] is an empty Array

// 7. Write a function that takes a string as an argument and returns an all-caps version 
// of the string when the string is longer than 10 characters. 
// Otherwise, it should return the original string. 
// Example: change 'hello world' to 'HELLO WORLD', but don't change 'goodbye'.


// 8. Write a function that logs whether a number is between 0 and 50 (inclusive), 
// between 51 and 100 (inclusive), greater than 100, or less than 0.





