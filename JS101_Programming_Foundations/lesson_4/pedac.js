// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// palindromeSubstrings("supercalifragilisticexpialidocious") == ["ili"]
// palindromeSubstrings("abcddcbA") == ["bcddcb", "cddc", "dd"]
// palindromeSubstrings("palindrome") == []
// palindromeSubstrings("") == []

// 1. Understand the problem: Input, Output, Rules, Assumptions

// Input: String
// Output: Array of strings
// Rules: 
  // 1. Return an array of strings that are palindromes, words that can be reversed
  // 2. Case does matter
  // 3. If the string doesn't have any palindromes, return empty array
  // 4. If string is empty, return empty array


  let produce = {
    apple: 'Fruit',
    carrot: 'Vegetable',
    pear: 'Fruit',
    broccoli: 'Vegetable'
  };

  function selectFruit(object) {

    const fruitObject = {};

    for (fruit in object) {
      if (object[fruit] === 'Fruit') {
        fruitObject[fruit] = 'Fruit';
      }
    }

    return fruitObject;
  }
  
  console.log(selectFruit(produce));
  
let myNumbers = [1, 4, 3, 7, 2, 6];

function doubleNumbers(array, multiplyBy) {

  for (let i = 0; i < array.length; i++) {
    array[i] *= multiplyBy
  }
}

doubleNumbers(myNumbers, 3); // => [2, 8, 6, 14, 4, 12]
console.log(myNumbers);      