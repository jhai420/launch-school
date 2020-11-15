// 1. What will the following code output? Try to determine the results without running the code.

// Code will output object [global] because context is a global variable located in the global object. 

// function func() {
//   return this;
// }

// let context = func();

// console.log(context);


// 2. What will the following code output? Explain the difference, if any, between this output and that of problem 1.

// Code will output 'obj' as its execution context because obj.func was invoked as a method. 
// The implicit execution context for methods is the object used to invoke it. 

let obj = {
  func: function() {
    return this;
  },
};

let context = obj.func();
console.log(context);

// 3. What will the following code output?

// Code will output "Hello from the global scope!" because a function's implicit context is global. 
// Undeclared variables such as "message" are also considered properties of the global object. 

message = 'Hello from the global scope!';

function deliverMessage() {
  console.log(this.message);
}

deliverMessage();

// Code will output "Hello from the function scope!" because the 'deliverMessage' function is added to 
// the 'foo' object as a method therefore when invoked, it uses the 'foo' object as its execution context. 

let fo = {
  message: 'Hello from the function scope!',
};

fo.deliverMessage = deliverMessage;

fo.deliverMessage();

// 4. What built-in methods have we learned about that we can use to specify a function's execution context explicitly?

// Call method and apply methods can both set a function or method's execution context. 

// 5. Take a look at the following code snippet. 
// Use call to invoke the add method but with foo as execution context. 
// What will this return?

// This will return 3 since foo is used as the execution context, hence a = 1 and b = 2. 1 + 2 = 3. 


let foo = {
  a: 1,
  b: 2,
};

let bar = {
   a: 'abc',
   b: 'def',
   add: function() {
     return this.a + this.b;
   },
};

console.log(bar.add.call(foo));

