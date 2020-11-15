// 1. What will the following code log to the console? Explain why it logs that value. 
// Try to answer without running the code.

// let qux = { foo: 1 };
// let baz = Object.create(qux);
// console.log(baz.foo + qux.foo);

// Code will log 2 because baz.foo will reference its prototype qux. 
// quz.foo is 1, which is 1 + 1 = 2.

// 2. What will the following code log to the console? Explain why it logs that value. 
// Try to answer without running the code.

// let qux = { foo: 1 };
// let baz = Object.create(qux);
// baz.foo = 2;

//console.log(baz.foo + qux.foo);

// Code will console log 3 because baz.foo is assigned a new value '2' hence it will not go up its prototype chain. 
// baz.foo 2 + qux.foo 1 = 3.

// 4. As we saw in problem 2, the following code creates a new property in the baz 
// object instead of assigning the property in the prototype object.

let qux = { foo: 1 };
let baz = Object.create(qux);
baz.foo = 2;

// Write a function that searches the prototype chain of an object for a given property and assigns it a new value. 
// If the property does not exist in any of the prototype objects, the function should do nothing. 

function assignProperty(object, property, newValue) {

while (object !== null) {
  if (object.hasOwnProperty(property)) {
    object[property] = newValue;
  }
  object = Object.getPrototypeOf(object);
}

}
// The following code should work as shown:

let fooA = { bar: 1 };
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);

assignProperty(fooC, "bar", 2);
console.log(fooA.bar); // 2
console.log(fooC.bar); // 2
console.log(fooC.hasOwnProperty("bar")); // false

assignProperty(fooC, "qux", 3);
console.log(fooA.qux); // undefined
console.log(fooC.qux); // undefined
console.log(fooA.hasOwnProperty("qux")); // false
console.log(fooC.hasOwnProperty("qux")); // false

