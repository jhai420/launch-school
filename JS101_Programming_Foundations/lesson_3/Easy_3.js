// 1. Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];

// while numbers.length {numbers.pop()} OR numbers.shift()
// numbers.splice(0, numbers.length)
// set number.length = 0

// 2. What will the following code output?
//Try to answer without running the code.
//[ [1, 2, 3], [4, 5] ] --> NOPEEE

// Correct answer: 1,2,34, 5 --> JS converts array to strings then concatenates strings

console.log([1, 2, 3] + [4, 5]);

// 3. What will the following code output?
// Try to answer without running the code.
// hello there, reassigning the copied string will not affect the parent string.

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1) 


// 4. What will the following code output?
// Try to answer without running the code.
// arr1 = [{ first: 42 }, { second: "value2" }, 3, 4, 5] 
// Because arr2 is a SHALLOW copy of arr1, changing the value of arr2 will affect the parent arr1. 
// They are POINTING to the same array.

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);


// 5. The following function unnecessarily uses two return statements to return boolean values. 
// How can you eliminate the unnecessary duplication?
// Try to come up with at least two different solutions.

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

// First Solution: Ternary operation
const trueFalse = color => color === "blue" || color === "green" ? true : false;
console.log(trueFalse('purple'));

// Second Solution: Function expression
const colorValid = color => color === "blue" || color === "green";
console.log(colorValid('blue'));

// Third Solution: Includes Method

const validColor = color => ['blue','green'].includes(color); 
console.log(validColor('blue'));



