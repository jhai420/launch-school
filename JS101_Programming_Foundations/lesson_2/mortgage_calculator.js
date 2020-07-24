// Write a program that takes in three parameters: loan amount, annual percentage rate (APR), loan duration
// Calculate the monthly interest rate
// Calculate the loan duration in months 

const rlSync = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return Number.isNaN(number) || number < 0;
}

prompt('Welcome to the mortgage calculator!');
startProgram();

function startProgram () {

  prompt('Please provide the loan amount:\n');
    let loanAmount = rlSync.question().replace(/,/g, '');
    if (loanAmount[0] === '$') {
      loanAmount = Number(loanAmount.substring(1));
    } else {
      loanAmount = Number(loanAmount);
    }

  while(invalidNumber(loanAmount)) {
    prompt('Please enter a valid loan amount:\n');
    loanAmount = rlSync.question().replace(/,/g, '');
    if (loanAmount[0] === '$') {
      loanAmount = Number(loanAmount.substring(1));
    } else {
      loanAmount = Number(loanAmount);
    }
  }

  prompt('Please provide the annual percentage rate (APR) (Format: Input 0.1 for 10%):\n');
  let apr = parseFloat(rlSync.question());
  let monthlyInterestRate = apr / 12;

  prompt('Please provide the loan duration in months:\n');
  let loanDuration = parseInt(rlSync.question());

  while(invalidNumber(loanDuration)) {
    prompt('Please enter a valid loan duration in months:\n');
    loanDuration = parseInt(rlSync.question());
  }

  let monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDuration))));
  monthlyPayment = monthlyPayment.toFixed(2);
  prompt(`Your monthly payment will be $${monthlyPayment}`);

  prompt('Another calculation? (Y/N)');
  let answer = rlSync.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "Y" or "N"');
    answer = rlSync.question().toLowerCase();
  }

  if (answer[0] === 'y') {
    startProgram();
  }

}