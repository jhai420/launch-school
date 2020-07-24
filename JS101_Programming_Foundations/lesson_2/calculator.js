// Ask the user for the first number
// Ask the user for the second number
// Ask the user for an operation to perform
// Perform the operation on the two numbers
// Print the result to terminal 

const rlSync = require('readline-sync');

/******** FUNCTIONS ********/

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return Number.isNaN(number);
}

function restart() {
  prompt('Would you like to perform another calculation? (Y/N)');
  let repeat = rlSync.question();

  if (repeat === 'Y' || repeat === 'y') {
    startProgram();
  }
}

/******** PROGRAM ********/

prompt('Welcome to Calculator!');
startProgram();

function startProgram() {
  prompt('Enter the first number:\n');
  let firstNum = Number(rlSync.question());

  while (invalidNumber(firstNum)) {
    prompt('Please enter a valid number');
    firstNum = Number(rlSync.question());
  }

  prompt('Enter the second number:\n');
  let secondNum = Number(rlSync.question());

  while (invalidNumber(secondNum)) {
    prompt('Please enter a valid number');
    secondNum = Number(rlSync.question());
  }

  prompt('What type of operation would you like to perform? (+, -, *, /)\n');
  let operation = rlSync.question();

  while (!['+', '-', '*', '/'].includes(operation)) {
    prompt('Please enter a valid operator: (+, -, *, /)');
    operation = rlSync.question();
  }

  if ((secondNum === 0) && (operation === '/')){
    console.log('Not a number');
  } 
  else {
    switch (operation) {
      case '+':
        console.log(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
        break;
      case '-':
        console.log(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
        break;
      case '*':
        console.log(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
        break;
      case '/':
        console.log(`${firstNum} / ${secondNum} = ${firstNum / secondNum}`);
        break;
      default:
        console.log('Please enter one of the following operators: (+, -, *, /)')
    }
  }

  restart();

}

