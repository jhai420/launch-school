// Create a class Rectangle.
// The constructor should take 2 arguments which represent width and length respectively.
// Implement the class so that the output from the example below is correct.


class Rectangle {
  constructor(width, length) {
    this.length = length;
    this.width = width;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getArea() {
    return this.length * this.width;
  }
}

let rect = new Rectangle(4, 5);

console.log(rect.getWidth()); // 4
console.log(rect.getLength()); // 5
console.log(rect.getArea()); // 20

// Write a class called Square that inherits from Rectangle, and is used like this:

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}

let square = new Square(5);
console.log(`area of square = ${square.getArea()}`); // area of square = 25

// Without calling the Cat constructor, create an object that looks and acts like a Cat instance that doesn't have a defined name.

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//   speaks() {
//     return `${this.name} says meowwww.`;
//   }
// }

// let fakeCat = Object.create(Cat.prototype) // your implementation
// console.log(fakeCat instanceof Cat); // logs true
// console.log(fakeCat.name);           // logs undefined
// console.log(fakeCat.speaks());       // logs undefined says meowwww.

// Consider the following program.
// Update this code so that when you run it, you see the following output:
// My cat Pudding is 7 years old and has black and white fur.
// My cat Butterscotch is 10 years old and has tan and white fur.

class Pet1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Cat2 extends Pet1 {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }

  info() {
    return `My cat ${this.name} is ${this.age} years old and has ${this.color} fur.`;
  }

}

let pudding1 = new Cat2('Pudding', 7, 'black and white');
let butterscotch1 = new Cat2('Butterscotch', 10, 'tan and white');

console.log(pudding1.info());
console.log(butterscotch1.info());

// Given a class Animal create two classes Cat and Dog than inherit from it.

// The Cat constructor should take 3 arguments, name, age and status. 
// Cats should always have a leg count of 4 and a species of cat. 
// Also, the introduce method should be identical to the original except, 
// after the phrase there should be a single space and the words Meow meow!. For example:



// The Dog constructor should take 4 arguments, name, age and status and master. 
// Dogs should always have a leg count of 4 and a species of dog. 
// Dogs have the same introduce method as any other animal, but they have their own method called greetMaster(), 
// which accepts no arguments and returns Hello (master's name)! Woof, woof!. 
// (Make sure you replace (master's name) with the name of the dog's master.)

class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
  }
}

class Cat extends Animal{
  constructor(name, age, status) {
    super(name, age, 4, 'cat', status);
  }

  introduce() {
    return super.introduce() + ' Meow meow!';
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, 'dog', status);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}! Woof, woof!`;
  }
}

let cat = new Cat("Pepe", 2, "happy");
console.log(cat.introduce() === "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!");
// logs true

// Refactor these classes so they all use a common superclass, and inherit behavior as needed:

class Vehicle {
  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }

  getWheels() {
    return this.wheels;
  }

  info() {
    return `${this.make} ${this.model}`
  }
}

class Car extends Vehicle{

  constructor(make, model) {
    super(make, model, 4)
  }

}

class Motorcycle extends Vehicle {

  constructor(make, model) {
    super(make, model, 2)
  }

}

class Truck extends Vehicle {

  constructor(make, model, payload) {
    super(make, model, 6);
    this.payload = payload;
  }

}

// What will the following code log?

class Something {
  constructor() {
    this.data = "Hello";
  }

  dupData() {
    return this.data + this.data;
  }

  static dupData() {
    return "ByeBye";
  }
}

let thing = new Something();
console.log(Something.dupData()); // "ByeBye"
console.log(thing.dupData()); // "HelloHello"

// Rewrite these two object types to use the class keyword, instead of direct prototype manipulation. 
// Person exposes method greeting which when called logs the provided greeting text. 
// Shouter is a subtype of Person and is a bit loud so whatever he says is uppercased.

class Person2 {
  greeting(text) {
    console.log(text);
  }
}

class Shouter extends Person2 {
  greeting(text) {
    super.greeting((text.toUpperCase()));
  }
}

let person = new Person2();
let shouter = new Shouter();

person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
shouter.greeting("Hello my friend."); // HELLO MY FRIEND.



// You have the following classes.

class Mammal {
  constructor(name, gait) {
    this.name = name;
    this.gait = gait;
  }

  walk() {
    return `${this.name} ${this.gait} forward`
  }
}

class Cat3 extends Mammal{
  constructor(name) {
    super(name, "saunters")
  }

}

class Cheetah extends Mammal{
  constructor(name) {
    super(name, "runs")
  }
}

class Human extends Mammal {
  constructor(name) {
    super(name, "strolls")
  }
}

// You need to modify the following code so that this works:

let mike = new Human("Mike");
console.log(mike.walk());
// "Mike strolls forward"

let kitty = new Cat3("Kitty");
console.log(kitty.walk());
// "Kitty saunters forward"

let flash = new Cheetah("Flash");
console.log(flash.walk());
// "Flash runs forward"

// Consider the following code:
// Write the classes and methods that will be necessary to make this code run, and log the following output:

/*
P Hanson has adopted the following pets:
a cat named Butterscotch
a cat named Pudding
a bearded dragon named Darwin

B Holmes has adopted the following pets:
a dog named Molly
a parakeet named Sweetie Pie
a dog named Kennedy
a fish named Chester

P Hanson has 3 adopted pets.
B Holmes has 4 adopted pets.
*/

class Pet {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }

  info() {
    return `a ${this.species} named ${this.name}`
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  numberOfPets() {
    return this.pets.length;
  }
}

class Shelter {

  constructor() {
    this.adoptions = {};
  }

  adopt(owner, pet) {
    if (!this.adoptions[owner.name]){
      this.adoptions[owner.name] = []
    } 

    this.adoptions[owner.name].push({
      owner: owner,
      pet: pet
    })

    owner.pets.push(pet);
  }

  printAdoptions() {
    for (let owner in this.adoptions) {
      console.log(`${owner} has adopted the following pets:`)
      this.adoptions[owner].forEach(pet => {
        console.log(pet.pet.info())
      })
      console.log('')
    }
  }
}

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);

//shelter.printAdoptions();
// P Hanson has adopted the following pets:
// a cat named Butterscotch
// a cat named Pudding
// a bearded dragon named Darwin

// B Holmes has adopted the following pets:
// a dog named Molly
// a parakeet named Sweetie Pie
// a dog named Kennedy
// a fish named Chester

//console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`); // P Hanson has 3 adopted pets.
//console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`); // B Holmes has 4 adopted pets.

// Behold this incomplete class for constructing boxed banners.

class Banner {
  constructor(message) {
    this.message = message;
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
    return '+-' + '-'.repeat(this.message.length) + '-+'
  }

  emptyLine() {
    return '| ' + ' '.repeat(this.message.length) + ' |'
  }

  messageLine() {
    return `| ${this.message} |`
  }
}

// Complete this class so that the test cases shown below work as intended. You are free to add any properties you need.
// You may assume that the input will always fit in your terminal window.
// Test Cases

let banner1 = new Banner('To boldly go where no one has gone before.');
banner1.displayBanner();

/*
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

*/

let banner2 = new Banner('');
banner2.displayBanner();

/*
+--+
|  |
|  |
|  |
+--+

*/