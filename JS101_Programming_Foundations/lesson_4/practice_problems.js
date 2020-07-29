// 1. What is the return value of the filter method call below? Why?
// Return value will be [1, 2, 3] because the callback function returns true and all numbers in the array are truthy. 

[1, 2, 3].filter(num => 'hi');

// 2. What is the return value of map in the following code? Why?
// Return value will be a new array [undefined, undefined, undefined]
// because the callback contains no explicit RETURN statement. 

let map = [1, 2, 3].map(num => {
  num * num;
});

// 3. The following code differs slightly from the above code. 
// What is the return value of map in this case? Why?

// The return value will be [1, 4, 9] because the callback function uses the
// arrow fucntion syntax which requires no explicit return statement to return a value

let map2 = [1, 2, 3].map(num => num * num);

// 4. What is the return value of the following statement? Why?
// Length will be equal to 11 because pop() return the last value of an array. 
// The length of the last value of the array 'catepillar' is 11. 

let pop = ['ant', 'bear', 'caterpillar'].pop().length
console.log(pop);

// 5. What is the callback's return value in the following code? 
// Also, what is the return value of every in this code?

// The return of the callback function is each number multiplied by two (2 4, 6), which are truthy values
// Since all numbers in the array are also a truthy, then the every method will return true 

[1, 2, 3].every(num => {
  return num = num * 2;
});

// 6. How does Array.prototype.fill work? Is it destructive? How can we find out?
// Fill will change all values within two indexes to a static value. If no indexes are provided, 
// then all elements in the array will change to that new static value. Yes it is destructive 
// and will directly modify the provided array instead of outputting a new array
// In the example below, arr will now equal [1, 1, 1, 1, 1]

let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);
//console.log(arr);

// 7. What is the return value of map in the following code? Why?
// Return value will be [undefined, 'bear'] since the callback function returns
// elements that have a length greater than 3. 

['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

// 8.  Take a look at the following array.

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// Write a program that uses this array to create an object where the names are the keys and the values are the positions in the array:

// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

function arrToObj(array) {
  let object = {};

  array.forEach((element, index) => object[element] = index);

  return object;
}

//console.log(arrToObj(flintstones))

// 9. Add up all of the ages from the Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

console.log(Object.values(ages).reduce((a, b) => a + b));

// 10. Pick out the minimum age from our current Munster family object:

let agess = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

console.log(Math.min(...Object.values(ages)));

// 11. Create an object that expresses the frequency with which each letter occurs in this string:

let statement = "The Flintstones Rock";

// The output will look something like the following:
// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

let charCount = statement.split(' ').join('').split('').reduce((acc, cur) => {
  !acc[cur] ? acc[cur] = 1 : acc[cur] ++;
  return acc;
}, {})

console.log(charCount);

console.log('butterscotch'.slice(-4, -3));

let dog = 'fido'
let letters = dog.split('');
letters[0] = letters[0].toUpperCase();
dog = letters.join('');
console.log(dog);

function lessThan(upperLimit) {

}

console.log(lessThan(5));