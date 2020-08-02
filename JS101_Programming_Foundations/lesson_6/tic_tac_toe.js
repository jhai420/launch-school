// 1. Understand and describe the problem: 
// Tic tac toe is a two player game on a 3x3 grid.
// Each player takes turns draw their symbol on the grid. 
// First player to reach 3 in a row, column, or diaganol wins the game.
// If all 9 squares are filled and there is no winner, then it's a tie. 

// 1a. Build a flow chart to further describe the details of the game
  // 1. Display the initial empty 3x3 board
  // 2. Player one makes a mark
  // 3. Player two (computer) makes a mark
  // 4. Display the board's current state
  // 5. Check the board status
      // 5a. If there is a winner then display winner
      // 5b. If the board is full then display a tie
      // 5c. If none of the above, then go back to step 2
  // 6. Play again? 
      // 6a. If yes, go back to step 1
      // 6b. If no, display goodbye, thanks for playing


/***************** GLOBAL CONSTANTS *****************/

const readlineSync = require('readline-sync');
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const prompt = (message) => console.log(`=> ${message}`);

/***************** GAMEPLAY FUNCTIONS *****************/
      
function displayBoard(board) {
  console.log('');
  console.log('     |     |');
  console.log(`  ${board[0]}  |  ${board[1]}  |  ${board[2]}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board[3]}  |  ${board[4]}  |  ${board[5]}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board[6]}  |  ${board[7]}  |  ${board[8]}`);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  return [' ',' ',' ',' ',' ',' ',' ',' ',' '];
}

function playerTurn(board) {
  prompt('Please choose a square (1-9):');
  let square = Number(readlineSync.question().trim()) - 1;

  while (square < 0 || square > 8) {
    prompt('Please enter a valid number between 1-9:');
    square = Number(readlineSync.question().trim()) - 1;
  }

  while (board[square] !== ' ') {
    prompt('Ooops! Square is already taken. Please choose another square (1-9):');
    square = Number(readlineSync.question().trim()) - 1;
  }
  
  board[square] = HUMAN_MARKER;
}

function computerTurn(board) {

  let randomIndex = Math.floor(Math.random() * 9);
  while(board[randomIndex] !== ' ') {
    randomIndex = Math.floor(Math.random() * 9);
  }
  board[randomIndex] = COMPUTER_MARKER;
}

function startGame() {
  prompt("Let's play tic tac toe! You are X. Ready? Please see the game board labeled 1-9");
  console.log('');
  console.log('     |     |');
  console.log(`  1  |  2  |  3`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  4  |  5  |  6`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  7  |  8  |  9`);
  console.log('     |     |');
  console.log('');

  let board = initializeBoard();
  
  while(true) {
    playerTurn(board);
    if (someoneWon(board) || boardFull(board)) break;

    prompt('My turn!');
    computerTurn(board);
    if (someoneWon(board) || boardFull(board)) break;
    displayBoard(board);
  }

  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${determineWinner(board)} won!`)
  } else {
    prompt("It's a tie!");
  }

  prompt('Play again? (y/n)');
  let answer = readlineSync.question().toLowerCase()[0];
  if (answer === 'y') {
    startGame();
  } else {
    prompt('Thanks for playing!')
  }
}

function boardFull(board) {
  return board.every(square => square !== ' ');
}

function someoneWon(board) {
  return !!determineWinner(board);
}

function determineWinner(board) {
  const winningLines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

  for (let i = 0; i < winningLines.length; i++) {
    let [sq1, sq2, sq3] = winningLines[i];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'You'
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
      ) {
        return 'I';
      }
  }
  return null;
}

// Inspects each possible 3-element winning array to see if there are 2 elements filled by the HUMAN_MARKER
// If there are 2 elements filled, then return the remaining square of that line 

function findAtRiskSquare(line, board) {

}

startGame();
