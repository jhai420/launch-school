function Car(args) {
  Object.assign(this, args);

  this.drive = function() {
    this.started = true;
  };
}

let civicArgs = {
  make: 'Honda',
  model: 'Civic',
  year: 2016,
  color: 'black',
  passengers: 5,
  convertible: false,
  mileage: 16000
};

let civic = new Car(civicArgs);

console.log(civic instanceof Car);

// 1. What naming convention separates constructor functions from other functions?
// Capitalized first letter 

// 2. What happens if you run the following code? Why?
// Running the following code returns an error because the 'new' method was not used to create a new object
// from the constructor function Lizard. 'lizzy' calles the constructor function, which has a return value of 'undefined'.
// Therefore lizzy.scamper() will return an error because the method does not exist. 

function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = new Lizard();
lizzy.scamper(); // ?

// 3. Alter the code in problem 2 so that it produces the desired output: I'm scampering!.

// 1. What does the following code log to the console? Try to answer without running the code. 
// Can you explain why the code produces the output it does?

// The code will return NaN because this.area calls the .area method in the execution context of RECTANGLE,
// which does not have access to the width and height properties. 

let RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  Object.setPrototypeOf(this, RECTANGLE);
  this.width = width;
  this.height = height;
  this.area = this.area();
  this.perimeter = this.perimeter();
}

let rect1 = new Rectangle(2, 3);

console.log(rect1.area);
console.log(rect1.perimeter);

// 2. How would you fix the problem in the code from problem 1?

// 3. Write a constructor function called Circle that takes a radius as an argument. 
// You should be able to call an area method on any objects created by the constructor 
// to get the circle's area. Test your implementation with the following code:

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.area = function() {
  return this.radius * this.radius * Math.PI;
}

let a = new Circle(3);
let b = new Circle(4);

console.log(a.area().toFixed(2)); // => 28.27
console.log(b.area().toFixed(2)); // => 50.27
console.log(a.hasOwnProperty('area')); // => false


// 4. What will the following code log to the console and why?
// Code with log true because the swingSword has been added to the Ninja's function prototype.
// All objects created by the Ninja constructor share the same prototype object.  


// function Ninja() {
//   this.swung = true;
// }

// let ninja = new Ninja();

// Ninja.prototype.swingSword = function() {
//   return this.swung;
// };

// console.log(ninja.swingSword());


// 5. What will the following code output and why? Try to answer without running the code.
// Code will output a TypeError because a function prototype cannot be reasssigned. Only properties
// can be added to the function prototype. 

function Samurai() {
  this.swung = true;
}

let samurai = new Samurai();

Samurai.prototype = {
  swingSword: function() {
    return this.swung;
  },
};

//console.log(samurai.swingSword());


// 6. Implement the method described in the comments below:

function Ninja2() {
  this.swung = false;
}

Ninja2.prototype.swing = function() {
  this.swung = true;
  return this;
}

// Add a swing method to the Ninja prototype which
// modifies `swung` and returns the calling object

// let ninjaA = new Ninja2();
// let ninjaB = new Ninja2();

// console.log(ninjaA.swing().swung);      // logs `true`
// console.log(ninjaB.swing().swung);      // logs `true`


// 7. In this problem, we'll ask you to create a new instance of an object, 
// without having direct access to the constructor function:

let ninjaA;

{
  const Ninja = function() {
    this.swung = false;
  };

  ninjaA = new Ninja();
}

// create a `ninjaB` object here; don't change anything else

let ninjaB = new ninjaA.constructor();

console.log(ninjaA.constructor === ninjaB.constructor) // => true

// 8. Since a constructor is just a function, you can call it without the new operator. 
// However, that can lead to unexpected results and errors, especially for inexperienced programmers. 
// Write a constructor function that you can use with or without the new operator. 
// The function should return the same result with either form. Use the code below to check your solution:

function User(first, last) {
  if (!(this instanceof User)) {
    return new User(first, last);
  }

  this.name = first + ' ' + last;

}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe



const Animal = function(species) {
  this.species = species;
  return species;
};

Animal.prototype.sleep = function() {
  console.log(`The ${this.species} is sleeping`);
};

let lion = new Animal('Panthera leo');
lion.sleep()
console.log(lion);