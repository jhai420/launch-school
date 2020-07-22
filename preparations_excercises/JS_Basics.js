// Add some code inside of the for loop below that logs the current value of i to the console on each iteration. 
// Before you run the code: What sequence of numbers do you expect to be logged? 
// Expect to log 0, 2, 4, 6, 8, 10

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
};

// Countdown

for (let j = 10; j >= 1; j -= 1) {
  console.log(j);
};

// Log Aloha three times

for (let k = 0; k < 3; k++) {
  console.log('Aloha')
};

// Multiple every number from 1-100 by two

for (let l = 1; l <= 100; l++) {
  console.log(l * 2);
}

// Iterate through array using while loop 

let array = [1, 2, 3, 4];
let index = 0;

while (index < array.length) {
  console.log(array[index]);
  index++;
};

// Write a for loop that loops over the elements of the array cities and logs the length of each string to the console. 
// If the element is null, skip forward to the next iteration without logging anything to the console.

let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

for (let m = 0; m < cities.length; m++) {
  if (cities[m] === null) {
    continue;
  }
  console.log(cities[m].length);
}

// Write a while loop that logs all odd natural numbers between 1 and 40.

let int = 1;

while (int < 40) {
  if (int % 2 !== 0) {
    console.log(int)
  };
  int++;
}

// Loop over the elements of the array fish, logging each one. Terminate the loop immediately after logging the string 'Nemo'.

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (let n = 0; n < fish.length; n++) {
  if (fish[n] === 'Nemo'){
    break;
  }

  console.log(fish[n]);
}

// Write an if statement that logs 'Yes!' if randomNumber is 1, and 'No.' if randomNumber is 0.

let randomNumber = Math.round(Math.random());

// Write a function that compares the length of two strings. 
// It should return -1 if the first string is shorter, 1 if the second string is shorter, 
// and 0 if they're of equal length, as in the following example:
  // compareByLength('patience', 'perseverance'); // -1
  // compareByLength('strength', 'dignity');      //  1
  // compareByLength('humor', 'grace');           //  0

  function compareByLength(string1, string2) {
    if (string1.length < string2.length) {
      return -1;
    } 
    else if (string1.length > string2.length) {
      return 1;
    }
    else {
      return 0;
    }
  };

// Modify string with substring and concat
  let ruby = 'Captain Ruby';
  let js = ruby.substring(0,8).concat('JavaScript');
  console.log(js);

// Hoisting
console.log(sample);
var sample = 'Hello';

// Local scope v. global scope // let v. var
if (true) {
  var myValue = 20;
}

console.log(myValue);

// Terenary Operations

// if (randomNumber) {
//   console.log('Yes!')
// } else {
//   console.log('No.')
// }

randomNumber ? console.log('Yes!') : console.log("No.");

// Switch

let weather = 'Sunny';

switch (weather) {
  case 'Sunny' :
    console.log("Let's go outside");
    break;
  case 'Rainy':
    console.log("Let's bring an umbrella");
    break;
  default:
    console.log("Let's stay inside");
}

// Implement a function repeat that repeats an input string a given number of times,
// without using the pre-defined string method String.prototype.repeat().

function repeat(number, string) {
  let newString = '';

  for (let i = 0; i < number; i++) {
    newString += string;
  }

  console.log(newString)

}

repeat(3, 'ha')

