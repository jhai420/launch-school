// Consider the following: 

function Greeting() {}

Greeting.prototype.greet = function(message) {
  console.log(message);
};

function Hello() {}

Hello.prototype = Object.create(Greeting.prototype);

Hello.prototype.hi = function() {
  this.greet('Hello!');
};

function Goodbye() {}

Goodbye.prototype = Object.create(Greeting.prototype);

Goodbye.prototype.bye = function() {
  this.greet("Goodbye");
};

// What happens in each of the following cases? Try to answer without running the code.

let hello1 = new Hello();
hello1.hi(); // Logs "Hello"

let hello2 = new Hello();
hello2.bye(); // Error

let hello3 = new Hello();
hello3.greet(); // Logs 'undefined'

let hello4 = new Hello();
hello4.greet('Goodbye'); // Log "Goodbye"

Hello.hi(); // Error

// 1. Suppose we have the following classes:

class Game {
  play() {
    return 'Start the game!';
  }
}

class Bingo extends Game {
  rulesOfPlay() {
    // rules of play
  }
}

// What would happen if we added a play method to the Bingo class, 
// keeping in mind that there is already a method of this name in the 
// Game class from which the Bingo class inherits? Explain your answer. 
// What do we call it when we define a method like this?

// If a play method is added to the Bingo class, it will override the inherited play method from the Game class. 
// When a method is called, JS will first look at its own properties and then go up the prototype chain 
// if the method is not found. 

/*
2. Let's practice creating a class hierarchy.

Create a class named Greeting that has a single method named greet. 
The method should take a string argument, and it should print that argument to the console.

Now, create two more classes that inherit from Greeting: one named Hello, and the other Goodbye. 
The Hello class should have a hi method that takes no arguments and logs "Hello". 
The Goodbye class should have a bye method that logs "Goodbye". 
Use the greet method from the Greeting class when implementing Hello and Goodbye; 
don't call console.log from either Hello or Goodbye.

*/

class Greeting {
  greet(string) {
    console.log(string);
  }
}

class Hello extends Greeting {
  hi() {
    this.greet("Hello");
  }
}

class Goodbye extends Greeting {
  bye() {
    this.greet("Goodbye");
  }
}

