// let qux = 86;
// console.log(global.qux); // undefined

// var bar1 = 42;
// console.log(global.bar1); // 42

// 1. Without running the code, what will it display? Explain.
//  foo() will log 'Bye' because the 'foo' function declaration will be hoisted to the top. 
// The 'foo' function declaration will then be REASSIGNED to another function definition, which logs 'bye'. 

// var foo1 = function() {
//   console.log("Bye");
// };

// function foo1() {
//   console.log("Hello");
// }

//foo();

// 2. What will the following code print? 
// undefined
// 'Hello'
// 'Bye'
// 2

// for (var index = 0; index < 2; index += 1) {
//   console.log(foo);
//   if (index === 0) {
//     var foo = "Hello";
//   } else {
//     foo = "Bye";
//   }
// }

// console.log(foo);
// console.log(index);

// 3. Without changing the order of the invocation and function definition, update this code so that it works:

// function bar() {
//   console.log("foo!");
// };

// bar();



// 4. What will the following code log?

// logs NaN

function boo() {
  var bar = bar - 42;
  console.log(bar);
}

var bar 
bar = 82;

//boo();

// 5. Rewrite the code below using let instead of var. 
// Your goal here is to change the way the variables are declared without altering the output of the program.

// foo(true):
  // undefined
  // 3.1415
  // 42

// foo(false);
  // undefined
  // 0.5772
  // 2.7183
  // undefined
  // 42

// function foo(condition) {
//   // var qux;
//   // var bar;
//   console.log(bar); 

//   qux = 0.5772;

//   if (condition) {
//     var qux = 3.1415;
//     console.log(qux);
//   } else {
//     var bar = 24;

//     var xyzzy = function() {
//       var qux = 2.7183;
//       console.log(qux);
//     };

//     console.log(qux);
//     console.log(xyzzy());
//   }

//   qux = 42;
//   console.log(qux);
// }

function foo(condition) {
  let bar;
  console.log(bar);

  let qux = 0.5772;

  if (condition) {
    qux = 3.1415;
    console.log(qux);
  } else {
    bar = 24;

    var xyzzy = function() {
      let qux = 2.7183;
      console.log(qux);
    };

    console.log(qux);
    console.log(xyzzy());
  }

  qux = 42;
  console.log(qux);
}

foo(true);
foo(false);

// 6. Rewrite the following code in a way that shows what the code would look like if 
// hoisting were a real process that actually reorganized your code. 
// The intent here is to clearly show how and when the various identifiers in this program are defined with respect to the code that actually gets executed.

function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

var Image;
var catImage;
var pudding;

Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

Image = class {
  constructor(file) {
    this.file = file;
  }
}

catImage = new Image("cat.png");
pudding = new Pet("Pudding", catImage);



