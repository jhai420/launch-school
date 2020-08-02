//RULES OF TWENTY-ONE
// Each deck has 52-cards:
  // 13 values (2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A) and 4 suits for each value (Hearts, Diamond, Clubs, Spades) 
// Goal of the game is to get as close as possible to 21 without going over
// Two players in the game: dealer and player

//GAMEPLAY
// Each player are dealt two cards. Player can see their 2 cards but can only see 1 of the dealer's cards
// Card numbers 2-10 are worth their face value
// Jack, Queen, King are each worth 10
// Ace can be worth 1 or 11
  // If the ace is 11 and sum of the hand > 21, then ace's value will turn to 1
  // Program must be able to handle multiple aces 
// Player goes first and decides whether to either hit (another card) or stay 
  // Player can continue to hit as many times as they want
  // Turn is over when the player either busts or stays 
  // If the player > 21, the game is over and the dealer wins
// When the player stays, it is the dealer's turn 
  // Dealer must hit until his total is at least 17
  // If the dealer > 21, then the player wins
// When both the player and dealer stay, it is time to compare the total value of the cards
  // Whoever has the highest value wins 

//IMPLEMENTATION STEPS
// 1. Initialize a 52-card deck
// 2. Deal cards to player and dealer
// 3. Player turn: hit or stay
    // Repeat until sum > 21 or player chooses stay
// 4. If player bust, announce dealer wins
// 5. Dealer turn: hit or stay
    // Repeat until total >= 17
// 6. If dealer bust, announce player wins 
// 7. Compare cards and declare winner 

// DATA STRUCTURE 

const readline = require('readline-sync');
const prompt = (message) => console.log(`=>${message}`);
const displayHand = (hand) => hand.join(', ');

function initializeDeck() {
  let deck = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 
    'Jack', 'Jack', 'Jack', 'Jack', 'Queen', 'Queen', 'Queen', 'Queen', 'King', 'King', 'King', 'King', 'Ace', 'Ace', 'Ace', 'Ace']

  return deck;
}

function dealCard(deck) {

  let randomCardIndex = Math.floor(Math.random() * 52);

  while (deck[randomCardIndex] === 0) {
    randomCardIndex = Math.floor(Math.random() * 52);
  }

  const card = deck[randomCardIndex];
  deck[randomCardIndex] = 0;

  return card;

}

function calculateHand(hand) {
  let total = 0;

  let sortedHand = hand.map(card => card === 'Ace' ? card = undefined : card).sort((a,b) => a - b);

  for (let card = 0; card < sortedHand.length; card++) {
    if (typeof sortedHand[card] === 'number') {
      total += sortedHand[card]
    } else if (sortedHand[card] === 'Jack' || sortedHand[card] === 'Queen' || sortedHand[card] === 'King') {
      total += 10;
    } else if (sortedHand[card] === undefined && total <= 10) {
      total += 11;
    } else if (sortedHand[card] === undefined && total > 10) {
      total += 1;
    }
  }
  
  return total;
}

function playerTurn(deck, playerHand) {

  prompt("Player's Turn");

  let playerTotal = calculateHand(playerHand);
  let hitOrStay;

  while(playerTotal < 21 && hitOrStay !== 's') {
  prompt('Hit or stay? (h/s)');
  hitOrStay = readline.question().toLowerCase().trim();

  while (hitOrStay[0] !== 'h' && hitOrStay[0] !== 's') {
    prompt('Please provide valid response. Hit or stay? (h/s)')
    hitOrStay = readline.question().toLowerCase().trim();
  }

   if (hitOrStay === 'h') {
     playerHand.push(dealCard(deck));
     playerTotal = calculateHand(playerHand);
     prompt(`Player's Hand: ${displayHand(playerHand)}`);
     prompt(`Card total: ${playerTotal}`);
   } else if (hitOrStay === 's') {
     prompt('Player stay.')
   }

  }

  return playerTotal;
}

function dealerTurn(deck, dealerHand) {
  let dealerTotal = calculateHand(dealerHand);

  while (dealerTotal < 17) {
    dealerHand.push(dealCard(deck));
    dealerTotal = calculateHand(dealerHand);
  }
  prompt(`Dealer's Hand: ${displayHand(dealerHand)}`);
  prompt(`Card total: ${dealerTotal}`);

  return dealerTotal;
}

function determineWinner(playerTotal, dealerTotal) {
  if (playerTotal === 21) {
    prompt('Blackjack! Player wins!');
  } else if (playerTotal > 21) {
    prompt('Player Bust! Dealer wins!');
  } else if (dealerTotal === 21) {
    prompt('Blackjack! Dealer wins!');
  } else if (dealerTotal > 21) {
    prompt('Dealer Bust! Player wins!');
  } else if (playerTotal === dealerTotal) {
    prompt("It's a push!");
  } else if (playerTotal > dealerTotal) {
    prompt('Player wins!')
  } else if (dealerTotal > playerTotal) {
    prompt('Dealer wins!')
  }
}

function startGame() {

  let deck = initializeDeck();
  let PLAYER_HAND = [];
  let DEALER_HAND = [];
  let playerTotal;
  let dealerTotal;

  PLAYER_HAND.push(dealCard(deck), dealCard(deck));
  prompt(`Player's Hand: ${displayHand(PLAYER_HAND)}`);
  playerTotal = calculateHand(PLAYER_HAND);
  prompt(`Card total: ${playerTotal}`);
  playerTotal === 21 ? prompt('Blackjack!') : null;

  DEALER_HAND.push(dealCard(deck), dealCard(deck));
  let hiddenDealerHand = DEALER_HAND.slice()
  hiddenDealerHand[1] = 'and unknown card'
  prompt(`Dealer's Hand: ${hiddenDealerHand.join(' ')}`);

  // Only go to player's turn if player did not hit 21 with first two cards
  if (playerTotal !== 21) {
    playerTotal = playerTurn(deck, PLAYER_HAND);
  }

  // Only go to dealer's turn if player did not bust or hit 21
  if (playerTotal < 21) {
    dealerTotal = dealerTurn(deck, DEALER_HAND);
  }

  determineWinner(playerTotal, dealerTotal);

  playAgain();

}

function playAgain() {

  prompt('Play again? (y/n)');
  let answer = readline.question().toLowerCase()[0];
  if (answer === 'y') {
    startGame();
  } else {
    prompt('Thanks for playing!')
  }
}

prompt("Let's play 21! Closest to 21 wins. Over 21 busts. Press enter to start.");
let start = readline.question();
start === '' ? startGame() : null;



