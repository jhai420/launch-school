// Update the following code so that, instead of logging the values, 
// each statement logs the name of the constructor to which it belongs.

console.log("Hello".constructor.name);
console.log([1,2,3].constructor.name);
console.log({name: 'Srdjan'}.constructor.name);

// Create an empty class named Cat

// Using the code from the previous exercise, create an instance of Cat and assign it to a variable named kitty.

// Using the code from the previous exercise, add a constructor method that logs to the console 'I'm a cat!'
//  when a new Cat object is initialized.

// Cat.prototype.constructor = function() {
//   console.log(`I'm a cat!`)
// }

// Using the code from the previous exercise, add a parameter to constructor that provides a name for the Cat object. 
// Assign this parameter to a property called name and use it to log a greeting with the provided name. 
// (You can remove the code that displays I'm a cat!.)

// Using the code from the previous exercise, move the greeting from the constructor method 
// to an instance method named greet that logs a greeting to the console when invoked.


class Cat {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello! My name is ${this.name}`)
  }

  static genericGreeting() {
    console.log("Hello! I'm a cat!")
  }
}


let kitty = new Cat('Sophie');
kitty.greet();

// Create a class Person.

// Person should accept one argument for "name" when instantiated.

// If no arguments are given, person object should instantiate with a "name" of "John Doe".

class Person {
  constructor(name = "John Doe") {
    this.name = name;
  }
}

let person1 = new Person();
let person2 = new Person("Pepe");

console.log(person1.name); // John Doe
console.log(person2.name); // Pepe

// Using the following code, add an instance method named rename that renames kitty when invoked.

Cat.prototype.rename =  function(newName) {
  this.name = newName;
}

kitty.rename('Chloe');
console.log(kitty.name);

// Modify the Cat class code so that Hello! I'm a cat! is logged when Cat.genericGreeting is invoked.

Cat.genericGreeting();

// Continuing with the class 'Cat', add two methods: static method genericGreeting and instance method greeting. 
// The first method should log a greeting that's generic to the class. 
// The second method should be an instance method and log a greeting that's custom to the object.


