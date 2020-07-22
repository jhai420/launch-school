// 1. Write a program name greeter.js that greets 'Victor' three times. 
// Your program should use a variable and not hard code the string value 'Victor' in each greeting. 

const greeter = 'Victor';
console.log('Good Morning, ' + greeter);
console.log('Good Afternoon, ' + greeter);
console.log('Good Evening, ' + greeter);

// 2. Write a program named age.js that includes someone's age and then calculates 
// and reports the future age in 10, 20, 30 and 40 years. 

function age (age) {
  return (`
    In 10 years, you will be ${age + 10} years old. 
    In 20 years, you will be ${age + 20} years old.
    In 30 years, you will be ${age + 30} years old.
    In 40 years, you will be ${age + 40} years old.`);
}

console.log(age(27));

const FOO = 'bar';
{
  const FOO = 'qux';
  console.log(FOO)
}

console.log(FOO);