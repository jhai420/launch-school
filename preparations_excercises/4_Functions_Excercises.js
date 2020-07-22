// 2. In the exercises for the previous chapter, you wrote a dynamic greeter program named greeter.js. 
// Add a function to this program that solicits the user's first and last names in separate invocations; 
// the function should return the appropriate name as a string. 
// Use the return values to greet the user with their full name.

const rlSync = require('readline-sync');

function greeter() {
  const fName = rlSync.question('What is your first name?\n');
  const lName = rlSync.question('What is your last name?\n');
  return `${fName} ${lName}`;
};

//console.log(`Hello, ${greeter()}!`);

// 3. Write a program that uses a multiply function to multiply two numbers and returns the result. 
// Ask the user to enter the two numbers, then output the numbers and result as a simple equation.

function multiply() {
  const firstNum = Number(rlSync.question('Enter the first number: \n'));
  const secondNum = Number(rlSync.question('Enter the second number: \n'));

  return `${firstNum} * ${secondNum} = ${firstNum * secondNum}`;
}

//console.log(multiply());

// 4. Use the times function shown below to write a program that logs the value of 1! (one factorial), 2! (two factorial), 3!, 4!, and 5! (five factorial) to the console.

function times(num1, num2) {
  const result = num1 * num2;
  console.log(result);
  return result;
}

let one = times(1, 1); // 1 * 1
let two = times(2, one); // 2 * 1
let three = times(3, two); // 3 * 2
let four = times (4, three); // 4 * 6
let five = times (5, four); // 5 * 24

// 5. What does the following code log to the console? 
// Nothing - undefined because function was returned before console logging.

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

let yipee = scream('Yipeee');
console.log(yipee);
