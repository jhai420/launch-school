// 1. Will the code below raise an error?
// No, the values before numbers[6] will output undefined, but it technically doesn't have a value despite returning undefined.

let numbers = [1, 2, 3];
numbers[6] = 5;
// console.log(numbers);

// Bonus:
numbers[4];  // what will this line return? Undefined, yaaas!

// 2. How can you determine whether a given string ends with an exclamation mark (!)?
// string.prototype.endsWith()

function stringEnd(string) {
  if (string[string.length - 1] === '!') {
    return true;
  } else {
    return false;
  }
}

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

console.log(stringEnd(str1));
console.log(stringEnd(str2));

// 3. Determine whether the following object of people and their age contains an entry for 'Spot':

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

console.log(ages.hasOwnProperty('Spot'));

// 4. Using the following string, create a new string that contains all lowercase letters 
// except for the first character, which should be capitalized. (See the example output.)

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
let newMunsters = munstersDescription[0].toUpperCase() + munstersDescription.substring(1).toLowerCase()
console.log(newMunsters);

// 5. What will the following code output?

console.log(false == '0'); // true
console.log(false === '0'); // false

// 6. We have most of the Munster family in our ages object:

let ages2 = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

// Add entries for Marilyn and Spot to the object:

// ages2.Marilyn = 23;
// ages2.Spot = 54;

let additionalAges = { Marilyn: 22, Spot: 237 };

Object.assign(ages2, additionalAges);
console.log(ages2);


// 7. Determine whether the name Dino appears in the strings below -- check each string separately):

let str3 = "Few things in life are as important as house training your pet dinosaur.";
let str4 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str3.indexOf('Dino') > 0);
console.log(str4.indexOf('Dino') > 0);
// Can also use includes and match methods

// 8. How can we add the family pet, "Dino", to the following array?

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push('Dino');

// 9. In the previous problem, our first answer added 'Dino' to the array like this:

let flintstones2 = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones2.push("Dino");

// How can we add multiple items to our array? ('Dino' and 'Hoppy')
flintstones2.push('Dino', 'Happy');

// 10. Return a new version of this sentence that ends just before the word house. 
// Don't worry about spaces or punctuation: remove everything starting from the beginning of house to the end of the sentence.

let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

// Two ways: 

let newAdvice = advice.replace('house training your pet dinosaur.', '');
console.log(newAdvice);

let anotherAdvice = advice.slice(0, advice.indexOf('house'));
console.log(anotherAdvice);

