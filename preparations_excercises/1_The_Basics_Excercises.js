// 1. Concatenate two or more strings, one with your first name and 
// one with your last, to create a string with your full name as its value. 
// For example, if your name is John Doe, think about how you can put 'John' and 'Doe' together to get 'John Doe'.

const firstName = 'Jenny';
const lastName = 'Hai';
const fullName = firstName + ' ' + lastName;
console.log(fullName);

// 2. Use the arithmetic operators to determine the individual digits of a 4-digit number like 4936:

const digit = 4936;
const thousands = parseInt((digit / 1000) % 10);
const hundreds = parseInt((digit / 100) % 10);
const tens = parseInt((digit / 10) % 10);
const ones = digit % 10;

// 3. Identify the data type for each of the following values:

'true' //'String';
false // 'Boolean';
1.5 // 'Number';
2 // 'Number';
undefined // 'undefined';
{ foo: 'bar' } // 'object';

// 4. Given the code below, identify which lines are statements and which are expressions:

let foo; // statement
foo = 5; // expression
foo; // expression

// 5. Explain why this code logs '510' instead of 15.

console.log('5' + 10);

// Code logs '510' because JS implicitly coerces the number 10 into a string. Therefore we are concatenating two strings '5' and '10'.

// 6. Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead.

console.log(Number('5') + 10);

// 7. Use the template literal syntax along with the expression Number('5') + 10 to log the following sentence to the console:
// The value of 5 + 10 is 15.

console.log(`The value of ${Number('5')} + 10 is 15.`);

// 8. Will an error occur if you try to access an array element with an index that is greater than or equal to the length of the array? For example:
// No, an error will not occur. It will simply return undefined.

let array = ['a', 'b', 'c'];
array.length;  // returns 3
array[3]; 
console.log(array[3]); 

// 9. Create an array named names that contains a list of pet names. For instance:

const names = ['asta', 'butterscotch', 'pudding'];

// 11. What value does the following expression evaluate to?

console.log('5' === 5); // strictly similar
console.log('5' == 5) // loosely similar

// 13. What value does the following expression evaluate to?

console.log('12' < '9');
// evaluated to true because JS does a character-by-character comparision from left to right, 1 is less than 9 

console.log('5' < '3')

// Looking up Documentation Excercises 

let fName = 'Ada';
let lName = 'Lovelace';
let name = fName.concat(' ',lName);

console.log(name);

let speedLimit = 60;
let currentSpeed = 80;

if ((currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5)) {
  console.log('"People are so bad at driving cars ' +
    'that computers don\'t have to be that good to be much better." ' +
    '-- Marc Andreessen');
}

