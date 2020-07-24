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

  return newString;

}

console.log(repeat(3, 'ha'));

//Write code that capitalizes the words in the string 'launch school tech & talk', 
// so that you get the string 'Launch School Tech & Talk'.

let capitalize = 'launch school tech & talk';

function toMountainCase(string) {
  let array = string.split(' ');
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    let capitalizedWord = array[i][0].toUpperCase();
    capitalizedWord += array[i].substring(1);
    newArray.push(capitalizedWord);
  }

  return newArray.join(' ');
  
}

console.log(toMountainCase(capitalize));


// We've been given an array of vocabulary words grouped into sub-arrays by meaning. 
// This is a two-dimensional array or a nested array. 
// Write some code that iterates through the sub-arrays and logs each vocabulary word to the console.

let vocabulary = [
  ['happy', 'cheerful', 'merry', 'glad'],
  ['tired', 'sleepy', 'fatigued', 'drained'],
  ['excited', 'eager', 'enthused', 'animated']
];

function nestedLog(array) {

  for (let i = 0; i < array.length; i++) {
    let synonyms = array[i];

    for (let j = 0; j < synonyms.length; j++) {
      console.log(synonyms[j])
    }
  }
}

nestedLog(vocabulary);

let array1 = [2, 6, 4];
let array2 = [2, 6, 4];

console.log(array1 == array2);

// Write a function that checks whether or not a particular destination is included within 
// destinations, without using the built-in method Array.prototype.includes().

function contains(string, array) {

  for (let i = 0; i < array.length; i++) {
    if (array[i] === string) {
      return true;
    }
  }
  return false;
}

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

console.log(contains('Barcelona', destinations));
console.log(contains('Nashville', destinations));

// Default parameters
function greeting() {
  return 'Good morning';
}

function recipient() {
  return 'Launch School';
}

function greet() {
  console.log(greeting() + ', ' + recipient() + '!');
}

greet('Salutations'); // logs: Salutations, world!

greet();  
greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!

// Implement a function catAge that takes a number of human years as input and converts them into cat years. 
// Cat years are calculated as follows:
// The first human year corresponds to 15 cat years.
// The second human year corresponds to 9 cat years.
// Every subsequent human year corresponds to 4 cat years.

function catAge(humanAge) {
  let cat = 24;

  if (humanAge === 0) {
    return 0;
  } else if (humanAge === 1) {
    return cat - 9;
  } else if (humanAge === 2) {
    return cat;
  } else {
    cat += (humanAge - 2) * 4;
    return cat;
  }

}

console.log(catAge(3));

// Create a function removeLastChar that takes a string as argument, and returns the string without the last character.

function removeLastChar(string) {
  return string.substring(0, string.length - 1);
}

console.log(removeLastChar('ciao!'))
console.log(removeLastChar('hello'))

// Refactor the function below using arrow syntax. Line 9 should still log the same sentence.

const template = 'I VERB NOUN.';

const sentence = (verb, noun) => template.replace('VERB', verb).replace('NOUN', noun);

console.log(sentence('like', 'birds'));
// logs: I like birds.

//The function initGame below returns an object. Refactor it using arrow function syntax.

let initGame = () => 
({
  level: 1,
  score: 0
});

let game = initGame();

console.log('Level: ' + game.level);
console.log('Score: ' + game.score);

// Add a property to the below object, jane, so that the code on line 13 logs 'Hej, Bobby!' to the console.

let jane = {
  firstName: 'Jane',
  lastName: 'Harrelson',
  age: 32,
  location: {
    country: 'Denmark',
    city: 'Aarhus'
  },
  occupation: 'engineer',
  // add code here
};

jane.greet = function (name) { 
  console.log('Hej, ' + name)
};

jane.greet('Bobby'); 
// Should log Hej, Bobby!

//Convert the person object into a nested array nestedPerson, containing the same key-value pairs.

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

const nestedPerson = Object.entries(person);

console.log(nestedPerson)

// Write code that does the reverse, starting from a nested array of pairs and building an object.

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

let object = {};

for (let i = 0; i < nestedArray.length; i++) {
  object[nestedArray[i][0]] = nestedArray[i][1]
}

console.log(object)

// Write a function clone that takes an object as argument and returns a shallow copy of that argument. 
// Shallow copy means that it returns a new object that has the same key/value pairs, 
// but that you don't need to worry about cloning the values as well. 
// The code below demonstrates the expected behaviour.

function clone(obj) {
  return obj;
}

let person1 = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let clonedPerson = clone(person1);
person.age = 34;

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33