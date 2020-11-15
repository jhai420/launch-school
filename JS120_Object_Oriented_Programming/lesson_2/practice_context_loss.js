// 1. The code below should output "Christopher Turk is a Surgeon". 
// Without running the code, what will it output? 
// If there is a difference between the actual and desired output, explain the difference.

// Yes the code will output "undefined" because the turk.getDescription method
// is passed into another function, therefore the execution context is stripped and the method 
// is executed in the global object. 

let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
      return this.firstName + ' ' + this.lastName + ' is a '
                                  + this.occupation + '.';
  }
};

function logReturnVal(func, context) {
  let returnVal = func.call(context);
  console.log(returnVal);
}

logReturnVal(turk.getDescription, turk);

// 2. Modify the program from the previous problem so that logReturnVal accepts an additional context argument. 
// If you then run the program with turk as the context argument, it should produce the desired output.



// 3. Suppose that we want to extract getDescription from turk, but we always want it to execute with turk 
// as its execution context. How would you modify your code to do that?

let getTurkDescription = turk.getDescription.bind(turk);


// 4. Consider the following code:

const TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    let self = this;
    this.titles.forEach(function(title) {
      console.log(self.seriesTitle + ': ' + title);
    });
  }
};

TESgames.listGames();

// Will this code produce the following output? Why or why not?

// No it will not because the anonymous function is passed in as an argument for the forEach method. 
// When a function is passed as an argument, it will execute in a global context.

// The Elder Scrolls: Arena
// The Elder Scrolls: Daggerfall
// The Elder Scrolls: Morrowind
// The Elder Scrolls: Oblivion
// The Elder Scrolls: Skyrim


// 5. Use let self = this; to ensure that TESgames.listGames uses TESGames as its context and logs the proper output.

// 6. The forEach method provides an alternative way to supply the execution context for the callback function. 
// Modify the program from the previous problem to use that technique to produce the proper output:

const TESgames2 = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ': ' + title);
    }, this);
  }
};

TESgames2.listGames();

// 7. Use an arrow function to achieve the same result:

const TESgames3 = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(title => console.log(this.seriesTitle + ': ' + title));
  }
};

TESgames3.listGames();

// 8. Consider the following code:
// What will the value of foo.a be after this code runs?

// value of foo.a will still be 0.

let foo = {
  a: 0,
  incrementA: function() {
    let increment = () => this.a += 1;
    increment();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();

console.log(foo.a);

// 9. Use one of the methods we learned in this lesson to invoke increment with an explicit context 
// such that foo.a gets incremented with each invocation of incrementA.



