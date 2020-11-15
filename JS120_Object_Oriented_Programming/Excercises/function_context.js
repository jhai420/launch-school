// Read the following code carefully. What do you think is logged on line 7. 
// Try to answer the question before you run the code.

let person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);

// Line 7 logs NaN because anywhere outside of a function, the 'this' keyword is bound to the global object. 
// If the keyword is used inside a function, then its value dpeends on HOW the function was invoked. 
// Since global.firstName and global.lastName is undefined then the operation undefined + undefined will return NaN. 

/*
The method franchise.allMovies is supposed to return the following array:
[
  'How to Train Your Dragon 1',
  'How to Train Your Dragon 2',
  'How to Train Your Dragon 3'
]

Explain why this method will not return the desired object? 
Try fixing this problem by taking advantage of JavaScript lexical scoping rules.

The method does not return the desired object because 'this.name' is referenced within the callback function of map, 
therefore the execution context is no longer refering to 'franchise'. To keep the execution context of 'this.name' as 'franchise', 
use an arrow function for the callback passed to map. 
*/

let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(number => this.name + ' ' + number);
  },
};

console.log(franchise.allMovies());

/*

In this exercise, we'll update an implementation of myFilter by adding the functionality of 
accepting an optional thisArg just like the original Array.prototype.filter.

Here's an implementation. We also show an example of how we want to call our modified function: 
the 3rd argument, filter, supplies the desired context (thisArg).

Modify the implementation such that the expected result is returned. 
Don't use the thisArg argument of Array.prototype.forEach.

*/

function myFilter(array, func, thisArg) {
  let result = [];

  array.forEach(function(value) {
    if (func.call(thisArg, value)) {
      result.push(value);
    }
  });

  return result;
}

let filter = {
  allowedValues: [5, 6, 9],
}

console.log(myFilter([2, 1, 3, 4, 5, 6, 9, 12], function(val) {
  return this.allowedValues.indexOf(val) >= 0;
}, filter)); // returns [5, 6, 9]

