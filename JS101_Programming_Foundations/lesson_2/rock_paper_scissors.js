/* This version of RPS lets the user plays against the computer. 
The game flow should go like this:

The user makes a choice.
The computer makes a choice.
The winner is displayed.

*/

const readLineSync = require('readline-sync');
let userScore = 0;
let myScore = 0;

function prompt(message) {
  console.log('=> ' + message);
}

function startGame () {

  prompt("Let\'s play rock paper scissors! Best out of three wins!");

  while(userScore < 3 && myScore < 3) {
    determineWinner(userTurn(), computerTurn());
  }

  displayWinner();

  restart();

}

function userTurn() {

  prompt('1, 2, 3, Shoot! Please choose: rock, paper, or scissors');
  let userChoice = readLineSync.question().toLowerCase();

  while (!['rock', 'paper', 'scissors'].includes(userChoice)) {
    prompt('Please choose a valid option: rock, paper, or scissors');
    userChoice = readLineSync.question().toLowerCase();
  }

  return userChoice;
}

function computerTurn() {
  const validChoices = ['rock', 'paper', 'scissors'];
  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice = validChoices[randomNumber];

  return computerChoice;
  
}

function determineWinner(user, comp) {

  // If user chooses rock and comp chooses scissors, user wins
  // If user chooses rock and comp chooses paper, comp wins
  // If user chooses paper and comp chooses rock, comp wins
  // If user chooses paper and comp chooses scissors, user wins
  // If user chooses scissors and comp chooses paper, user wins 
  // If user chooses scissors and comp chooses rock, comp wins
  // If both players choose the same item, it's a tie

  prompt(`You: ${user}`);
  prompt(`Me: ${comp}`);

 if (user === 'rock' && comp === 'scissors') {
  userScore++;
   prompt(`You win! Your score: ${userScore} | My Score: ${myScore}`);
 } else if (user === 'rock' && comp === 'paper') {
  myScore++;
  prompt(`I win! Your score: ${userScore} | My Score: ${myScore}`);
 } else if (user === 'paper' && comp === 'rock') {
  userScore++;
  prompt(`You win! Your score: ${userScore} | My Score: ${myScore}`);
 } else if (user === 'paper' && comp === 'scissors') {
  myScore++;
  prompt(`I win! Your score: ${userScore} | My Score: ${myScore}`);
 } else if (user === 'scissors' && comp === 'rock') {
  myScore++;
  prompt(`I win! Your score: ${userScore} | My Score: ${myScore}`);
 } else if (user === 'scissors' && comp === 'paper') {
  userScore++;
  prompt(`You win! Your score: ${userScore} | My Score: ${myScore}`);
 } else if (user === comp) {
  prompt(`It's a tie! Your score: ${userScore} | My Score: ${myScore}`);
 }

}

function displayWinner() {

  if (userScore === 3) {
    prompt('You are the final winner!');
  } else if (myScore === 3) {
    prompt('I am the final winner!');
  }

}

function restart() {

  userScore = 0;
  myScore = 0;

  prompt('Want to play again? (y/n)') 
  let answer = readLineSync.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Want to play again? Please answer with (y/n)')
    answer = readLineSync.question().toLowerCase();
  }

  if (answer[0] === 'y') {
    startGame();
  }

}

startGame();

