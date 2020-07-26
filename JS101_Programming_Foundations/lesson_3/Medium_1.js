// 1. Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the days before computers had video screens.
// For this practice problem, write a program that creates the following output 10 times, 
// with each line indented 1 space to the right of the line above it:
// The Flintstones Rock!
//  The Flintstones Rock!
//   The Flintstones Rock!

function flintASCII (string, repeat) {
  let count = 0;

  while (count < repeat) {
    console.log(' '.repeat(count) + string + '\n');
    count++;
  }
}

//console.log(flintASCII('The Flintstones Rock!', 10));

// 2. Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";

// Return a new string that swaps the case of all of the letters:
// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

function swapCase(string) {
  let newString = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toLowerCase()) {
      newString += string[i].toUpperCase();
    } else if (string[i] === string[i].toUpperCase()) {
      newString += string[i].toLowerCase();
    }
  }

  return newString;
}

//console.log(swapCase(munstersDescription));

// 3. Alan wrote the following function, which was intended to return all of the factors of number:

function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

//console.log('Factor:', factors(10));

// Alyssa noticed that this code would fail when the input is 0 or a negative number, and asked Alan to change the loop. 
// How can he make this work without using a do/while loop? Note that we're not looking to find the factors for 0 or negative numbers, 
// but we want to handle it gracefully instead of raising an exception or going into an infinite loop.

function factors2(number, factors = []) {

  if (number <= 0) {
    return 'Please enter a positive number greater than 0'
  }
  
  for (let divisor = number; divisor > 0; divisor --) {
    if (number % divisor === 0) {
      factors.push(number /divisor);
    }
  }
  return factors;
}

console.log('Factor:', factors2(20));


// Bonus: What is the purpose of number % divisor === 0 in that code?
// Determines if the number has a remainder after divided by the divisor. 
// If the result is an integer than the divisor is a factor

// 4. Alyssa was asked to write an implementation of a rolling buffer. 
// You can add and remove elements from a rolling buffer. 
// However, once the buffer becomes full, any new elements will displace the oldest elements in the buffer.

// She wrote two implementations of the code for adding elements to the buffer. 
// In presenting the code to her team leader, she said "Take your pick. 
// Do you prefer push() or concat() for modifying the buffer?".

// Is there a difference between these implementations, other than the method she used to add an element to the buffer?
// Push method will modify the original passed in buffer argument
// Concat method will not, which is better. You don't want to unintentionally modify variables outside of the scope. 

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

// 5. What will the following two lines of code output?
// Don't look at the solution before you answer.


console.log(0.3 + 0.6); // 0.9 --> 0.899999999999
console.log(0.3 + 0.6 === 0.9); // false, JS uses floating point numbers and they lack precision 


// 6. What do you think the following code will output?

// Code will output false because NaN is not a value you can define. 
// You must use Number.isNaN() to determine whether it is NaN.
// Hence console.log(Number.isNaN(nanArray[0])) will be true

let nanArray = [NaN];

console.log(nanArray[0] === NaN); 

// Bonus: How can you reliably test if a value is NaN?

// 7. What is the output of the following code?
// Code should output 34. Primitive values are immutable. 

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

// 8. One day, Spot was playing with the Munster family's home computer, 
// and he wrote a small program to mess with their demographic data:

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

// After writing this function, he typed the following code:

messWithDemographics(munsters);

// Before Grandpa could stop him, Spot hit the Enter key with his tail. Did the family's data get ransacked? Why or why not?
// Yes the family's data did get ransacked because Object.values outputed an array that points to the same object of the original munsters.

// 9. Method calls can take expressions as arguments. 
// Suppose we define a function called rps as follows, which follows the classic rules of the rock-paper-scissors game, 
// but with a slight twist: in the event of a tie, it awards the win to the first of the two fists.

function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

// What is the result of the following call?
// paper

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

console.log('paper');


// 10. Consider these two simple functions:

function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

// What will the following function invocation return?

bar(foo());
// --> bar ('yes');
// --> return 'no'
