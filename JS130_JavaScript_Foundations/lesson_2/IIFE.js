let foo = function() {
  console.log("Hello")
}();

// 1. Will the following code execute without error? Try to answer without running it.
// Yes because there is no parantheses wrapped around the function. 

// 2. Rewrite the example from the previous so that it executes without error.

(function() {
  console.log("Sometimes, syntax isn't intuitive!");
})();

// 3. The code below throws an error:

var sum = 0;
sum += 10;
sum += 31;

let numbers = [1, 7, -3, 3];

sum += (function sum(arr) {
  return arr.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
})(numbers);

//console.log(sum);

// Why does this code produce an error? Correct the problem by using an IIFE.
// The code throws an error because there is both a variable and function definition named 'sum'. 
// When sum() is called, the variable doesn't reference a function and therefore throws an error 

// 4. Consider the following code and output:
// Replace the invocation of countdown with an IIFE that produces the same results.
//countdown(7)
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

(function(num) {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
})(7);

// 5. Is the named function inside in this IIFE accessible in the global scope?
// No it is not accessible outside the scope created by the IIFE. 

(function foo() {
  console.log('Bar');
})();

// foo() // ?

// 6. Consider the following code from a practice problem in an earlier lesson:
// Rewrite this code using an IIFE. Your solution should no longer need the name foo.

let bar = (function (start) {
  let prod = start;
  return function (factor) {
    prod *= factor;
    return prod;
  };
})(2); 

let result = bar(3);
result += bar(4);
result += bar(5);
console.log(result);

// 7. For an extra challenge, refactor the solution to problem 4 using recursion. 

// (function(num) {
//   for (let i = num; i >= 0; i--) {
//     console.log(i);
//   }
// })(7);

// Bear in mind that named functions created as IIFEs can be referenced by those same functions. 
// That is, you can call use a function's name in the body of the IIFE. 
// Don't worry if you can't solve this problem; it's a bit tricky.

(function counter(num) {
  console.log(num);
  if (num === 0) return 0;
  counter(--num);
})(7);




