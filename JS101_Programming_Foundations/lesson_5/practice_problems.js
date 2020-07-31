// 1. How would you order the following array of number strings by 
// descending numeric value (largest number value to smallest)?

let arr = ['10', '11', '9', '7', '8'];

arr.sort((a,b) => b - a);
//console.log(arr)

// 2. How would you order the following array of objects based on 
// the year of publication of each book, from the earliest to the latest?

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((a, b) => a.published - b.published);

//console.log(books);

// 3. For each of these collection objects, demonstrate how you would access the letter g.

let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
//console.log(arr1[2][1][3]);

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
//console.log(arr2[1].third[0]);

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
//console.log(arr3[2].third[0][0]);

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
//console.log(obj1.b[1])

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}
//console.log(Object.keys(obj2.third)[0]);

// 4. For each of these collection objects, demonstrate how you would change the value 3 to 4.

let arrayy1 = [1, [2, 3], 4];

arrayy1[1][1] = 4
//console.log(arrayy1);

let arrayy2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arrayy2[2] = 4;
//console.log(arrayy2)

let object1 = { first: [1, 2, [3]] };
object1.first[2][0] = 4;
//console.log(object1);

let object2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
object2.a.a[2] = 4;
//console.log(object2);

// 5. Consider the following nested object:
// Compute and display the total age of the male members of the family.

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

// let totalAge = Object.values(munsters).reduce((acc, cur) => {
//   cur.gender === 'male' ? acc += cur.age : null;
//   return acc;
// }, 0);

// console.log(totalAge);


// 6. One of the most frequently used real-world string operations is that of "string substitution," 
// where we take a hard-coded string and modify it with various parameters from our program.

// Given this previously seen family object, print the name, age, and gender of each family member:

// Each output line should follow this pattern:
// (Name) is a (age)-year-old (male or female).

let munsterss = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

//Object.entries(munsterss).forEach(munster => console.log(`${munster[0]} is a ${munster[1].age}-year-old ${munster[1].gender}.`))

// 7. Given the following code, what will the final values of a and b be? 
// Try to answer without running the code.
// [4, [3, 8]], Because arrr[0] is a primitive data type, it was copied over to the new array. 
// Therefore modifying arrr[0] will not mutate the original 'a' variable.

let a = 2;
let b = [5, 8];
let arrr = [a, b];

arrr[0] += 2;
arrr[1][0] -= a;

//console.log(arrr)

// 8. Using the forEach method, write some code to output all vowels from the strings in the arrays. 
// Don't use a for or while loop.

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};


let vowels = ['a', 'e', 'i', 'o', 'u']
let splitWords = Object.values(obj).flat().join('').split('')
//splitWords.forEach((letter) => vowels.includes(letter) ? console.log(letter): null);

// 9. Given the following data structure, return a new array with the same structure, 
// but with the subarrays ordered -- alphabetically or numerically as appropriate -- in ascending order.

let array1 = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let newArray = array1.map((subArr) => typeof subArr[0] === 'string' ? subArr.slice().sort() : subArr.slice().sort((a,b) => a - b));
//console.log(newArray);


// 10. Perform the same transformation of sorting the subarrays we did in the 
// previous exercise with one difference; sort the elements in descending order.

let newArray2 = array1.map((subArr) => typeof subArr[0] === 'string' ? subArr.slice().sort((a,b) => b.localeCompare(a)) : subArr.slice().sort((a,b) => b - a));
//console.log(newArray2);

let array2 = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

// 11. Given the following data structure, use the map method to return a new array 
// identical in structure to the original but, with each the number incremented by 1. 
// Do not modify the original data structure.

let array3 = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let newArray3 = array3.map(object => {
  let newObj = {};
  for (let key in object) {
    newObj[key] = object[key] + 1;
  }
  return newObj;
});
//console.log(newArray3);


// 12. Given the following data structure, use a combination of methods, including filter, 
// to return a new array identical in structure to the original, but containing only the numbers that are multiples of 3.

let array4 = [[2], [3, 5, 7], [9], [11, 15, 18]];

let newArray4 = array4.map((subArr) => subArr.filter(number => number % 3 === 0));

//console.log(newArray4);

// 13. Given the following data structure, sort the array so that the sub-arrays 
// are ordered based on the sum of the odd numbers that they contain.

let array5 = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

array5.sort((a,b) => {
  let aSum = a.filter(num => num % 2 !== 0).reduce((acc, cur) => acc + cur);
  let bSum = b.filter(num => num % 2 !== 0).reduce((acc, cur) => acc + cur);
  return aSum - bSum;
});
//console.log(array5);

// 14. Given the following data structure write some code to return an array 
// containing the colors of the fruits and the sizes of the vegetables. 
// The sizes should be uppercase, and the colors should be capitalized.

let object = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let arrayOfFruits = [];
for (let fruit in object) {
  if (object[fruit].type === 'fruit') {
    arrayOfFruits.push(object[fruit].colors.map(color =>  color.slice(0,1).toUpperCase() + color.slice(1)));
  } else {
    arrayOfFruits.push(object[fruit].size.toUpperCase())
  }
};

//console.log(arrayOfFruits);



// 15. Given the following data structure, write some code to return an array 
// which contains only the objects where all the numbers are even.

let arrayy = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let newArrayy = arrayy.filter(object => Object.values(object).flat().every(num => num % 2 === 0));

//console.log(newArrayy);

// 16. Given the following data structure, write some code that returns an object 
// where the key is the first item in each subarray, and the value is the second.

let arrayyy = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

let newArrayyy = arrayyy.reduce((acc, cur) => {
  acc[cur[0]] = cur[1];
  return acc;
}, {});

//console.log(newArrayyy);

// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

// 17. Practice Problem 17
// A UUID is a type of identifier often used to uniquely identify items, even 
// when some of those items were created on a different server or by a different application. 
// That is, without any synchronization, two or more computer systems can create new items 
// and label them with a UUID with no significant risk of stepping on each other's toes. 
// It accomplishes this feat through massive randomization. 
// The number of possible UUID values is approximately 3.4 X 10E38, which is a huge number. 
// The chance of a conflict is vanishingly small with such a large number of possible values.

// Each UUID consists of 32 hexadecimal characters (the digits 0-9 and the letters a-f) represented as a string. 
// The value is typically broken into 5 sections in an 8-4-4-4-12 pattern, 
// e.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

// Write a function that takes no parameters and returns a UUID.

// 0 - 9 = 48 - 57
// a - f = 97 - 102

function generateUUID() {

  const characters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  let uuid = '';

  for (let i = 0; i < 32; i++) {
    uuid += characters[Math.floor(Math.random() * 16)];
  }

  return `${uuid.slice(0,8)}-${uuid.slice(8,12)}-${uuid.slice(12,16)}-${uuid.slice(16,20)}-${uuid.slice(20)}`
  
}

console.log(generateUUID());

let todoLists = [
  {
    id: 1,
    listName: 'Groceries',
    todos: [
      { id: 1, name: 'Bread', completed: false },
      { id: 2, name: 'Milk', completed: false },
      { id: 3, name: 'Apple Juice', completed: false }
    ]
  }
];

console.log(todoLists[0]['todos'][2].name);

function evenValues(array) {
  let evens = [];

  array.forEach(value => {
    if (value % 2 === 0) {
      evens.push(value);
    }
    console.log(array.shift());
  });

  return evens;
}

console.log(evenValues([1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]))