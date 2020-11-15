/*
Game Description:
- Twenty-One is a card game with a dealer and a player.
- The participants try to get as close to 21 points as possible without going over.
- The game starts by dealing cards from a 52-card deck consisting of cards from 4 suits of 13 ranks each.
- Both participants receive two cards.
    - The dealer hides one of his cards (places it face-down) so that the player can't see what it is.
    - The player can see both of her cards.
- The player takes the first turn, and can hit or stay.
  - If the player hits, she gets another card, and again has the opportunity to hit (get another card) or stay.
  - If the player goes over 21 points, she busts.
  - If the player stays, the dealer plays next.
  - If the player didn't bust, it's now the dealer's turn.
The dealer reveals his face-down card.
  - If the dealer's total points are less than 17, he must hit and receive another card.
  - If the dealer goes over 21 points, he busts.
  - If the dealer has 17 points or more, he must stay.
Results of the game are determined.

Nouns: game, dealer, player, points, cards, deck, suits, ranks, turn, score
Verbs: start, deal, receive, hide, see, hit, stay, win, bust, play, reveal

1. Game: start, turn
2. Participant: play
  - Player: hit, stay, score, bust
  - Dealer: hit, stay, score, bust
3. Deck: deal
4. Card: reveal, hide, see
  - Suits
  - Ranks

*/

const readline = require('readline-sync');
const prompt = (message) => console.log(`=>${message}`);

class Participant {

  constructor() {
    this.hand = [];
    this.score = 0;
  }

  hit(deck) {
    this.hand.push(deck.dealCard());
    this.displayHand();
    this.calculateHand();
    this.displayScore();
  }

  calculateHand() {
    let total = 0;

    let sortedHand = this.hand.map(card => card[0] === 'A' ? card = 'zzzzzz' : card).sort();

    for (let card = 0; card < sortedHand.length; card++) {

      if (sortedHand[card][0] === 'J' || sortedHand[card][0] === 'Q' || sortedHand[card][0] === 'K') {
        total += 10;
      } else if (sortedHand[card] === 'zzzzzz' && total <= 10) {
        total += 11;
      } else if (sortedHand[card] === 'zzzzzz' && total > 10) {
        total += 1;
      } else if (typeof parseInt(sortedHand[card]) === 'number') {
        total += parseInt(sortedHand[card])
      } 
    }

    this.score = total;
    return total;
  }

}

class Player extends Participant {

  stay() {
    prompt('Player stay.');
  }

  displayHand() {
    // Display the player's hand and her point total.
    let hand = this.hand.join(', ');
    prompt(`Player's Hand: ${hand}`);
  }

  displayScore() {
    prompt(`Player Card Total: ${this.score}`);
  }

}

class Dealer extends Participant {

  displayFirstHand() {
    let hiddenHand = this.hand.slice();
    hiddenHand[1] = 'and unknown card';
    prompt(`Dealer's Hand: ${hiddenHand.join(' ')}`);
  }

  displayHand() {
    let hand = this.hand.join(', ');
    prompt(`Dealer's Hand: ${hand}`);
  }

  displayScore() {
    prompt(`Dealer Card Total: ${this.score}`);
  }
}

class Deck {
  // Be prepared to run out of cards. 
  // You can either create a new deck for each game, 
  // or keep track of how many cards remain and create a new deck as needed.

  constructor() {
    this.deck = this.initalizeDeck();
  }

  shuffle(deck) {
    for (let index = deck.length - 1; index > 0; index--) {
      let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
      [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]]; // swap elements
    }
    return deck;
  }

  initalizeDeck() {
    let deck = ['2S', '2H', '2C', '2D', '3S', '3H', '3C', '3D', '4S', '4H', '4C', '4D', '5S', '5H', '5C', '5D', 
    '6S', '6H', '6C', '6D', '7S', '7H', '7C', '7D', '8S', '8H', '8C', '8D', '9S', '9H', '9C', '9D', 
    '10S', '10H', '10C', '10D', 'Jack S', 'Jack H', 'Jack C', 'Jack D', 'Queen S', 'Queen H', 'Queen C', 'Queen D', 
    'King S', 'King H', 'King C', 'King D', 'Ace S', 'Ace H', 'Ace C', 'Ace D']
    return this.shuffle(deck);
  }

  dealCard() {
    let card = this.deck.shift();
    return card;
  }

}

class Game21 {

  constructor() {
    this.deck = new Deck();
    this.player = new Player();
    this.dealer = new Dealer();
    this.moneyPot = 5;
    this.round = 1;
  }

  play() {
    do {
      this.displayWelcomeMessage();

      while(this.moneyPot !== 0 && this.moneyPot !== 10) {
        this.displayRoundMessage()
        this.dealCards();
  
        // If player doesn't hit blackjack, then go to player turn
        this.player.score !== 21 ? this.playerTurn() : null;
  
        // Only go to dealer's turn if player did not bust or hit 21
        this.player.score < 21 ? this.dealerTurn() : null;
  
        this.determineWinner();
        this.displayMoneyPot();
        this.round++;
        this.clearRound();
      }
      this.displayFinalWinner();
    } while (this.playAgain())

    this.displayGoodByeMessage();
  }

  displayWelcomeMessage() {
    prompt("Let's play 21! Closest to 21 wins. Over 21 busts.");
    prompt("Start with $5. $1 bet each round. Get to $0, player loses. Get to $10, player wins!");
    prompt("Press enter to start.");

    let start = readline.question();
    while(start !== '') {
      prompt("Press enter to start");
      start = readline.question();
    }
  }

  displayRoundMessage() {

    if (this.round === 1) {
      prompt(`Round ${this.round}!`)
    } else {
      prompt(`Round ${this.round}! Press enter to start.`)
      let start = readline.question();
      while(start !== '') {
        prompt("Press enter to start");
        start = readline.question();
      }
    }
    
  }

  displayFinalWinner() {
    this.moneyPot === 0 ? prompt("Sorry you're broke! Game over.") : prompt("You're rich with $10 in the money pot. Take your money and run!")
  }

  displayGoodByeMessage() {
    prompt('Thanks for playing 21!')
  }

  dealCards() {
    this.player.hand.push(this.deck.dealCard(), this.deck.dealCard());
    this.player.displayHand();
    this.player.calculateHand();
    this.player.displayScore();

    this.dealer.hand.push(this.deck.dealCard(), this.deck.dealCard());
    this.dealer.displayFirstHand();
  }

  playerTurn() {

      prompt("Player's Turn");
      let playerTotal = this.player.calculateHand();
      let hitOrStay;

      while(playerTotal < 21 && hitOrStay !== 's') {
        prompt('Hit or stay? (h/s)');
        hitOrStay = readline.question().toLowerCase().trim();

        while (hitOrStay[0] !== 'h' && hitOrStay[0] !== 's') {
          prompt('Please provide valid response. Hit or stay? (h/s)')
          hitOrStay = readline.question().toLowerCase().trim();
        }

        if (hitOrStay === 'h') {
          this.player.hit(this.deck);
          playerTotal = this.player.calculateHand();
        } else {
          this.player.stay();
        }
      }

  }

  dealerTurn() {
    // Display the dealer's hand, including the hidden card, and report his point total.
    // Redisplay the dealer's hand and point total and each time he hits.
    // Display the results when the dealer stays.

    prompt("Dealer's Turn");
    this.dealer.displayHand();
    let dealerTotal = this.dealer.calculateHand();
    this.dealer.displayScore();
    while (dealerTotal < 17) {
      this.dealer.hit(this.deck);
      dealerTotal = this.dealer.calculateHand();
    }

  }

  determineWinner() {
    if (this.player.score === 21) {
      this.moneyPot++;
      prompt('Blackjack! Player wins!');
    } else if (this.player.score > 21) {
      this.moneyPot--;
      prompt('Player Bust! Dealer wins!');
    } else if (this.dealer.score === 21) {
      this.moneyPot--;
      prompt('Blackjack! Dealer wins!');
    } else if (this.dealer.score > 21) {
      this.moneyPot++;
      prompt('Dealer Bust! Player wins!');
    } else if (this.player.score === this.dealer.score) {
      prompt("It's a push!");
    } else if (this.player.score > this.dealer.score) {
      this.moneyPot++;
      prompt('Player wins!')
    } else if (this.player.score > this.dealer.score) {
      this.moneyPot--;
      prompt('Dealer wins!')
    }


  }

  playAgain() {
    // After each game is over, ask the player if they want to play again. 
    // Start a new game if they say yes, else end the game.

    prompt("Play again? (y/n)");
    let answer = readline.question().toLowerCase();

    while(answer[0] !== 'y' && answer[0] !== 'n') {
      prompt("Play again? Please enter 'y' or 'n':")
      answer = readline.question().toLowerCase();
    }
    return answer[0] === 'y' ? true : false;

  }

  displayMoneyPot() {
    prompt(`Money Pot: $${this.moneyPot}`)
  }

  clearRound() {
    this.deck = new Deck();
    this.player = new Player();
    this.dealer = new Dealer();
  }
}

let game = new Game21();
game.play();