//Example: Prompt the User For Name

const rlSync = require('readline-sync');
//const name = rlSync.question("What's your name?\n");
//console.log(`Good Morning, ${name}`);

// 1. Write a dynamic greeter program named greeter.js. 
// The program should ask for your name, then output Hello, {name}! where {name} is the name you entered:

//const name = rlSync.question("What's your name?\n");
//console.log(`Hello, ${name}!`);

// 2. Modify the greeter.js program to ask for the user's first and last 
// names separately, then greet the user with their full name.

const fName = rlSync.question("What's your first name?\n");
const lName = rlSync.question("What's your last name?\n");

console.log(`Hello, ${fName} ${lName}!`);


