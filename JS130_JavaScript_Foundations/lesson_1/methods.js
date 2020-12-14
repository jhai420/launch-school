function forEach(array, callback, context) {
  for (let i = 0; i < array.length; i++) {
      callback.call(context, array[i], i, array)
  }
}

let arr = [1, 2, 3, 4];

let multiplyBy2 = (element) => console.log(element * 2);

// TEST:
//forEach(arr, multiplyBy2);

class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}

let foo = new Foo("Item: ");

// TEST:
// forEach(["a", "b", "c"], item => console.log(item));
// forEach([1, 2, 3], foo.showItem, foo);
// forEach([4, 5, 6], foo.showItem);

// forEach(["a", "b", "c"], function(value, index, arr) {
//   console.log(`After ${value} comes ${arr[index + 1]}`);
// });

function filter(array, callback) {
  let filtered = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      filtered.push(array[i])
    }
  }

  return filtered;
}

// TEST:
// let numbers = [1, 2, 3, 4, 5];
// console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
// console.log(filter(numbers, number => number < 0)); // => []
// console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(filter(values, value => typeof value === "string"));
// // => [ 'abc', 'xyz' ]

function map(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}

// TEST:
// let numbers = [1, 2, 3, 4, 5];
// console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
// console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
// console.log(map(numbers, () => false));
// // => [ false, false, false, false, false ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(map(values, value => String(value)));
// // => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]

function reduce(array, callback, acc) {
  let arr = array.slice();
  acc === undefined ? acc = arr.shift() : null;
  
  for (let i = 0; i < arr.length; i++) {
    acc = callback(acc, arr[i]) 
  }

  return acc;
}

let add = (acc, num) => acc + num

//console.log(reduce([1, 2, 3, 4], add));

function fizzBuzzReducer(acc, element) {
  if (element % 15 === 0) return `${acc}Fizz Buzz\n`;
  if (element % 5 === 0) return `${acc}Fizz\n`;
  if (element % 3 === 0) return `${acc}Buzz\n`;
  return `${acc}${element}\n`;
}

const nums = [
  1, 2, 3, 4, 5, 6, 7, 8, 9,
  10, 11, 12, 13, 14, 15
];

// TEST:
//console.log(nums.reduce(fizzBuzzReducer, ''));

const peopleArr  = [
  {
      username:    'glestrade',
      displayname: 'Inspector Lestrade',
      email:       'glestrade@met.police.uk',
      authHash:    'bdbf9920f42242defd9a7f76451f4f1d',
      lastSeen:    '2019-05-13T11:07:22+00:00',
  },
  {
      username:    'mholmes',
      displayname: 'Mycroft Holmes',
      email:       'mholmes@gov.uk',
      authHash:    'b4d04ad5c4c6483cfea030ff4e7c70bc',
      lastSeen:    '2019-05-10T11:21:36+00:00',
  },
  {
      username:    'iadler',
      displayname: 'Irene Adler',
      email:       null,
      authHash:    '319d55944f13760af0a07bf24bd1de28',
      lastSeen:    '2019-05-17T11:12:12+00:00',
  },
];

function keyByUsernameReducer(acc, person) {
  return {...acc, [person.username]: person};
}

// TEST:
//console.log(reduce(peopleArr, keyByUsernameReducer, {}))

function filterReduce(array, callback) {

  let filteredArr = array.reduce((acc, element) => {
    if (callback(element)) {
      acc.push(element)
    }
    return acc;
  }, []);

  return filteredArr;
}

// TEST:
// let numss = [1, 2, 3, 4, 5];
// console.log(filterReduce(numss, number => number > 3)); // => [ 4, 5 ]
// console.log(filterReduce(numss, number => number < 0)); // => []
// console.log(filterReduce(numss, () => true));           // => [ 1, 2, 3, 4, 5 ]

function mapReduce(array, callback) {
  return array.reduce((acc, element) => {
    acc.push(callback(element));
    return acc;
  }, [])
}

function objForEach(object, callback) {
  for (let property in object) {
    if (object.hasOwnProperty(property)) {
      callback(property, object[property])
    }
  }
}

let obj = { foo: 1, bar: 2, qux: 3 };
objForEach(obj, (property, value) => {
  console.log(`the value of ${property} is ${value}`);
});