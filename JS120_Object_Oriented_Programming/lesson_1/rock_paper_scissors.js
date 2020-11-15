/* 

Gameflow: 
- User makes a choice (rock, paper or scissors)
- Computer makes a choice (rock, paper or scissors)
- Compare the choice between User and Computer 
- Winner is displayed:
  - Rock beats scissors
  - Scissors beats paper
  - Paper beats rock 
  - If the player chose the same move, the game is a tie 

Nouns: User, Computer, Choice
Verbs: Makes (choice), Compare, Display

1. Create an object for 2 players with 3 different states and 1 single behavior 

*/

const readlineSync = require('readline-sync');

function createHuman() {
  let human = {
    move: null,
    score: 0,
    pastMoves: [],

    makeChoice() {
        let choice;

        while(!["rock", "paper", "scissors"].includes(choice)) {  
          console.log("Please choose rock, paper or scissors:");
          choice = readlineSync.question();
        }
        this.move = choice;
        this.pastMoves.push(choice);
    }
  }

  return human;
}


function createComputer() {
  let computer = {
    move: null,
    score: 0,
    pastMoves: [],

    makeChoice() {
        const choices = ["rock", "paper", "scissors"];
        let randomNum = Math.floor(Math.random() * 3);
        this.move = choices[randomNum];
        this.pastMoves.push(this.move);
    }
  }

  return computer;
}


const RPSGame = {

  human: createHuman(),
  computer: createComputer(),

  displayWelcomeMessage() {
    console.log("Let's play Rock, Paper, Scissors! First to 5 wins.");
  },

  displayGoodbyeMessage() {
    console.log("Thanks for playing Rock, Paper, Scissors! Good-bye <3")
  },

  displayWinner() {
    console.log(`You chose ${this.human.move}.`);
    console.log(`Computer chose ${this.computer.move}.`);

    if ((this.human.move === "rock" && this.computer.move === "scissors") ||
    (this.human.move === "scissors" && this.computer.move === "paper") ||
    (this.human.move === "paper" && this.computer.move === "rock")) {
      this.human.score++;
      console.log("You won this round!");
      console.log(`Your score: ${this.human.score}`);
      console.log(`Computer score: ${this.computer.score}`);
    } else if ((this.computer.move === "rock" && this.human.move === "scissors") ||
    (this.computer.move === "scissors" && this.human.move === "paper") ||
    (this.computer.move === "paper" && this.human.move === "rock")) {
      this.computer.score++;
      console.log("Computer won this round!");
      console.log(`Your score: ${this.human.score}`);
      console.log(`Computer score: ${this.computer.score}`);
    } else {
      console.log("It's a tie!");
      console.log(`Your score: ${this.human.score}`);
      console.log(`Computer score: ${this.computer.score}`);
    }

    if (this.human.score === 5) {
      console.log("Congrats! You won the game!");
    } else if (this.computer.score === 5) {
      console.log("Woop, the computer won the game. Better luck next time!")
    }
  },

  playAgain() {
    console.log("Play again? (y/n)");
    let answer = readlineSync.question();
    while (answer[0] !== 'y' && answer[0] !== 'n') {
      console.log("Play again? (y/n)");
      answer = readlineSync.question();
    }
    if (answer === 'y') {
      return true;
    } else {
      return false;
    }
  },

  play() {
    this.displayWelcomeMessage();

    while(true) {
      while(this.human.score < 5 && this.computer.score < 5) {
        this.human.makeChoice();
        this.computer.makeChoice();
        this.displayWinner();
      }
  
      if (!this.playAgain()) break;
    }

    console.log("Here are all your past moves:")
    this.human.pastMoves.forEach(move => console.log(move));
    this.displayGoodbyeMessage();
  }
}

RPSGame.play();
