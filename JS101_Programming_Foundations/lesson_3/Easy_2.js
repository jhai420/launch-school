// 1. Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur.";

let newAdvice = advice.replace('important', 'urgent');
console.log(newAdvice);

// 2. The Array.prototype.reverse method reverses the order of elements in an array, 
// and Array.prototype.sort can rearrange the elements in a variety of ways, including descending. 
// Both of these methods mutate the original array as shown below. 
// Write two distinct ways of reversing the array without mutating the original array. 
// Use reverse for the first solution, and sort for the second.

let numbers = [1, 2, 3, 4, 5];
let reverseNumbers = numbers.slice().reverse();
console.log(reverseNumbers); // [ 5, 4, 3, 2, 1 ]
console.log(numbers);

numbers = [1, 2, 3, 4, 5];
let sortedNumbers = [...numbers].sort((num1, num2) => num2 - num1)
console.log(sortedNumbers); // [ 5, 4, 3, 2, 1 ]
console.log(numbers);

// Bonus 1: Can you do it using the Array.prototype.forEach() method?
numbers = [1, 2, 3, 4, 5];
let numbers2 = [];
numbers.forEach(num => numbers2.unshift(num));
console.log(numbers2);

// Bonus 2: Can you do it using the Array.prototype.reduce() method?
let numbers3 = numbers.reduce(function (acc, cur) {
  acc.unshift(cur);
  return acc;
}, []);

console.log(numbers3)


// 3. Given a number and an array, determine whether the number is included in the array.

let numbersArray = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

console.log(numbersArray.indexOf(number1) > 0);
console.log(numbersArray.indexOf(number2) > 0)

// 4. Starting with the string:

let famousWords = "seven years ago...";

// show two different ways to put the expected "Four score and " in front of it.

let newWords = "Four score and " + famousWords;
let newWords2 = "Four score and ".concat(famousWords);

console.log(newWords);
console.log(newWords2);

// 5. Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing 
// the number at index 2, so that the array becomes [1, 2, 4, 5].

let numArray = [1, 2, 3, 4, 5];
numArray.splice(2, 1);
console.log(numArray);

// 6. Suppose we build an array like this:

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
//This code will create a nested array that looks like this:

["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// Create a new array that contains all of the above values, but in an un-nested format:

[ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]

// Using concat and spread operator
//flintstones = [].concat(...flintstones);

// Using flat method
flintstones = flintstones.flat();
console.log(flintstones);

// 7. Consider the following object:

let flintstoness = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// Create an array from this object that contains only two elements: Barney's name and Barney's number:

[ 'Barney', 2 ]

// let barney = [];
// barney.push('Barney', flintstoness.Barney);

// Using Object.entries
let barney = Object.entries(flintstoness).filter((name) => name[0] === 'Barney').flat();
console.log(barney);

// 8. How would you check whether the objects assigned to variables numbers and table below are arrays?

let numbersArr = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

console.log(Array.isArray(numbersArr));
console.log(Array.isArray(table));

// 9. Back in the stone age (before CSS), we used spaces to align things on the screen. 
// If we have a 40-character wide table of Flintstone family members, 
// how can we center the following title above the table with spaces?

let title = "Flintstone Family Members";

let padding = Math.floor((40 - title.length) / 2);
console.log(padding);

let newTitle = title.padStart(padding + title.length, '*');
console.log(title);
console.log(newTitle);

// 10. Write two one-line expressions to count the number of lower-case t characters in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

// Using Reduce
let countReduce = statement1.split('').reduce(function (acc, cur) {
  cur === 't' ? acc++ : null;
  return acc;
}, 0)

console.log(countReduce);

// Using Filter

let countFilter = statement1.split('').filter(char => char === 't').length;
console.log(countFilter);







