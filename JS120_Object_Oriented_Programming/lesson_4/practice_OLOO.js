// 1. Use a factory function to create pet objects. The factory should let us create and use pets like this:

function createPet(animal, name) {
  return {
    animal: animal,
    name: name,

    sleep() {
      console.log("I am sleeping");
    },

    wake() {
      console.log("I am awake");
    },

  }
}

let pudding = createPet("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake();  // I am awake
console.log(pudding.animal);

let neptune = createPet("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake();  // I am awake

// 2. Use the OLOO pattern to create an object prototype that we can use to create pet objects. 
// The prototype should let us create and use pets like this:

const PetPrototype = {
  sleep: function() {
    console.log("I am sleeping");
  },

  wake: function() {
    console.log("I am awake");
  },

  init(animal, name) {
    this.animal = animal;
    this.name = name;
    return this;
  }
}

let pudding2 = Object.create(PetPrototype).init("Cat", "Pudding");
console.log(`I am a ${pudding2.animal}. My name is ${pudding2.name}.`);
pudding2.sleep(); // I am sleeping
pudding2.wake();  // I am awake

let neptune2 = Object.create(PetPrototype).init("Fish", "Neptune");
console.log(`I am a ${neptune2.animal}. My name is ${neptune2.name}.`);
neptune2.sleep(); // I am sleeping
neptune2.wake();  // I am awake

// 3. Consider the objects created by the programs in problems 1 and 2. 
// How do objects for the same animal differ from each other?

// In problem 1, the methods are copied each time a new object is created hence requiring more memory space. 
// Factory functions in P1 also create a private state. They can't be accessed or modifed unless a method exposes the state.
// In problem 2, the methods are referenced as a prototype. All objects created will contain a prototype object
// that references the same prototype, saving memory space. All object states can be accessed and modified by outside code.