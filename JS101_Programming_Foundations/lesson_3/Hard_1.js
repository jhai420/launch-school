// 1. Will the following functions return the same results?
// Try to answer without running the code or looking at the solution.
// First will return an object, second will return undefined because JS will automatically
// insert a semicolon after the return. Therefore the function exits before the object.

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

// 2. What does the last line in the following code output?
// Try to answer without running the code or looking at the solution.
// Output: { first: [1, 2] } because numArray points to the object's 'first' property.

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

// slice the array first if you do not want to modify the original object
let numArr = object.first.slice();
object.first.push(3);
console.log(object.first);
console.log(numArr);

// 3. Given the following similar sets of code, what will each code snippet print?

// REASSIGNING VARIABLES will not mutate the passed in argument
// Mutating the argument through splice will change the passed in argument 

// A: 
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // one
console.log(`two is: ${two}`); // two
console.log(`three is: ${three}`); // three

// B:
function messWithVars2(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one1 = ["one"];
let two2 = ["two"];
let three3 = ["three"];

messWithVars2(one1, two2, three3);

console.log(`one is: ${one1}`); // one
console.log(`two is: ${two2}`); // two
console.log(`three is: ${three3}`); // three

// C:
function messWithVars3(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let onee = ["one"];
let twoo = ["two"];
let threee = ["three"];

messWithVars3(onee, twoo, threee);

console.log(`one is: ${onee}`); //two
console.log(`two is: ${twoo}`); //three
console.log(`three is: ${threee}`); //one

// 4. Ben was tasked to write a simple javascript function to determine whether an input string 
// is an IP address using 4 dot-separated numbers, 
// e.g., 10.4.5.11. He is not familiar with regular expressions.

// Alyssa supplied Ben with a function named isAnIpNumber. 
// It determines whether a string is a numeric string between 0 and 255 as required 
// for IP numbers and asked Ben to use it. Here's the code that Ben wrote:

function isDotSeparatedIpAddress(inputString) {

  let dotSeparatedWords = inputString.split(".");

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      break;
    }
  }
  
}

function isDotIp(string) {

  let dotSeparatedWords = inputString.split(".");

  if (dotSeparatedWords.length !== 4) {
    return false;
  }

  while(dotSeparatedWords.length > 0) {
    let number = dotSeparatedWords.pop();
    if (!isAnIpNumber(number)) {
      return false
    }
  }

  return true;

}

console.log('10.4.5.11'.split('.'))

// Alyssa reviewed Ben's code and said, "It's a good start, but you missed a few things. 
// You're not returning a false condition, and you're not handling the case when the input 
// string has more or less than 4 components, 
// e.g., 4.5.5 or 1.2.3.4.5: both those values should be invalid."

// Help Ben fix his code.



