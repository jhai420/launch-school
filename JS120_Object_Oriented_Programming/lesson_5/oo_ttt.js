/*
Description
- Tic Tac Toe is a 2-player board game.
- The board is a 3x3 grid.
- Players take turns marking a square with a marker that identifies the player.
- Traditionally, the player to go first uses the marker X to mark her squares, and the player to go second uses the marker O.
- The first player to mark 3 squares in a row with her marker wins the game.
- A row can be a horizontal row, a vertical column, or either of the two diagonals (top-left to bottom-right and top-right to bottom-left).
- There is one human player and one computer player.
- The human player always moves (places a marker) first in the initial version of our game; you can change that later.

Nouns: player, board/grid, game, square, marker, first, second, human, computer, row, column, diagonals
Verbs: mark, play, win, move
*/
const readline = require('readline-sync');

class Square {
  static UNUSED_SQUARE = " ";
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = "O";

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }

  setMarker(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }

}

class Board {
  constructor() {
    this.squares = {};
    for (let i = 1; i <= 9; i++) {
      this.squares[i] = new Square();
    }
  }

  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}`);
    console.log("     |     |");
    console.log("");
  }

  displayWithClear() {
    console.clear();
    console.log("");
    console.log("");
    this.display();
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  isUsedSquare(key) {
    // Return true if square is already marked 
    return this.squares[key].marker !== Square.UNUSED_SQUARE
  }

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.squares[key].marker === Square.UNUSED_SQUARE);
  }

  isFull() {
    return this.unusedSquares().length === 0;
  }

  // Counts the number of a single marker that exists within a given row of keys
  countMarkersFor(player, keys) {
    let markers = keys.filter(key => this.squares[key].getMarker() === player.getMarker());

    return markers.length;
  }

  returnLastMove(player, keys) {
    let defenseMove = keys.filter(key => this.squares[key].getMarker() !== player.getMarker());

    return defenseMove;
  }

}

class Player {
  constructor(marker, score) {
    this.marker = marker;
    this.score = score;
  }

  getMarker() {
    return this.marker;
  }

  incrementScore() {
    this.score++;
  }
}

class Human extends Player{
  constructor() {
    super(Square.HUMAN_MARKER, 0);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER, 0);
  }
}

class TTTGame {
  static POSSIBLE_WINNING_ROWS = [
    [ "1", "2", "3" ],            // top row of board
    [ "4", "5", "6" ],            // center row of board
    [ "7", "8", "9" ],            // bottom row of board
    [ "1", "4", "7" ],            // left column of board
    [ "2", "5", "8" ],            // middle column of board
    [ "3", "6", "9" ],            // right column of board
    [ "1", "5", "9" ],            // diagonal: top-left to bottom-right
    [ "3", "5", "7" ],            // diagonal: bottom-left to top-right
  ];

  static joinOr = function(array, separator = ", ", conjunction = "or") {
    let string;
    if (array.length === 1) {
      string = array[0].toString();
    } else if (array.length === 2) {
      string = `${array[0]} ${conjunction} ${array[1]}`
    } else {
      // Make a shallow copy of the array 
      // Extract the last element of the array
      // Join the remaining elements with the optional separator 
      // Add the last element with the optional conjuntion 

      let newArray = array.slice();
      let lastElement = newArray.pop();
      string = `${newArray.join(separator)} ${conjunction} ${lastElement}`
    }

    return string
  }

  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
    this.players = [this.human, this.computer];
    this.firstPlayer = this.players[Math.floor(Math.random() * 2)];
  }

  play() {

    this.displayWelcomeMessage();

    do {

      while (true) {

        // First Move (Odd)
        if (this.firstPlayer === this.human) {
          this.board.display();
          this.humanMoves();
        } else if (this.firstPlayer === this.computer) {
          this.computerMoves();
          this.board.display();
        }
        if(this.roundOver()) break;

        // Second Move (even)
        if (this.firstPlayer === this.human) {
          this.computerMoves();
        } else if (this.firstPlayer === this.computer) {
          this.humanMoves();
        }
        if(this.roundOver()) break;

        this.board.displayWithClear();
      }

      this.board.displayWithClear();
      this.displayRoundResults();
      this.clearBoard();
      this.firstPlayer = this.togglePlayer(this.firstPlayer);
    } while(!this.finalWinner(this.human) && !this.finalWinner(this.computer));

    this.displayFinalResults();
    this.displayGoodbyeMessage();

  }

  togglePlayer(player) {
    return player === this.human ? this.computer : this.human;
  }

  displayWelcomeMessage() {
    console.clear();
    console.log("Welcome to Tic Tac Toe! First to score 3 wins!");
    console.log("");
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing Tic Tac Toe! Bye!")
  }

  displayRoundResults() {
    if (this.isWinner(this.human)) {
      this.human.incrementScore();
      console.log("You won this round! Congrats!");
      this.displayScore();
    } else if (this.isWinner(this.computer)) {
      this.computer.incrementScore();
      console.log("I won this round! :P")
      this.displayScore();
    } else {
      console.log("A tie game. Bleh.")
      this.displayScore();
    }
  }

  displayScore() {
    console.log(`Your Score: ${this.human.score}`);
    console.log(`My Score: ${this.computer.score}`);
  }

  displayFinalResults() {
    if (this.finalWinner(this.human) && this.finalWinner(this.computer)) {
      console.log("A tie game. How boring.")
    } else if (this.finalWinner(this.human)) {
      console.log("You are the final winner! Congrats!");
    } else if (this.finalWinner(this.computer)) {
      console.log("I am the final winner! Take that human!");
    } 
  }

  humanMoves() {
    // Code displays a prompt
    // Human player picks a square (value between 1-9)
    // Read the human input
    // While the human input is invalid, prompt for input again
    // Mark the selected square

    console.log("Please choose a square between 1 and 9:");
    let choice = Number(readline.question().trim());

    while (isNaN(choice) || (choice < 1 || choice > 9)) {
      console.log("Invalid choice. Please choose a square between 1 and 9");
      choice = Number(readline.question().trim());
    }

    while(this.board.isUsedSquare(choice)) {
      let validChoices = TTTGame.joinOr(this.board.unusedSquares());
      console.log(`Square already marked. Please choose an unmarked square: ${validChoices}`);
      choice = Number(readline.question().trim());
    }

    this.board.markSquareAt(choice, this.human.getMarker());

  }

  computerMoves() {

    // If there is a square that is a potential winner, pick that square
    let choice = this.winningSquare(this.computer);
    
    // If there is no winning square and a square is at risk, then pick that square
    if (!choice) {
      choice = this.winningSquare(this.human);
    } 

    // If center square '5' is available, then pick that square
    if (!(this.board.isUsedSquare('5'))) {
      choice = '5';
    }
    
    // Otherwise, pick a random unused square
    if (!choice) {
      do {
        choice = Math.floor((Math.random() * 9 + 1)).toString();
      } while(this.board.isUsedSquare(choice));
    }

    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  winningSquare(player) {
    let winningSquare = null;

    TTTGame.POSSIBLE_WINNING_ROWS.forEach(row => {
      if (this.board.countMarkersFor(player, row) === 2) {
        let lastMove = this.board.returnLastMove(player, row)
        if (!(this.board.isUsedSquare(lastMove))) {
          winningSquare = lastMove;
        }
      }
    });

    return winningSquare;
  }

  roundOver() {
    return this.board.isFull() || this.someoneWon();
  }

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }

  // Checks if at least one of the possible winning rows contain 3 markers from the same player 
  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    })
  }

  finalWinner(player) {
    return player.score === 3;
  }

  playAgain() {
    console.log("Play again? (y/n)");
    let answer = readline.question().toLowerCase();

    while(answer[0] !== 'y' && answer[0] !== 'n') {
      console.log("Play again? Please enter 'y' or 'n':")
      answer = readline.question().toLowerCase();
    }

    return answer[0] === 'y' ? true : false;
  }

  clearBoard() {
    this.board = new Board();
  }
}

let ticTacToe = new TTTGame();
ticTacToe.play();