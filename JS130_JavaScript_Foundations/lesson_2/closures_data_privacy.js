// 1. Create a function named makeCounterLogger that takes a number as an argument and returns a function. 
// When we invoke the returned function with a second number, 
// it should count up or down from the first number to the second number, logging each number to the console:

function makeCounterLogger(start) {
  return function(end) {
    if (start < end) {
      for (let i = start; i <= end; i++) {
        console.log(i)
      }
    } else if (start > end) {
      for (let i = start; i >= end; i--) {
        console.log(i)
      }
    }
  }
}

let countlog = makeCounterLogger(5);
countlog(8);
countlog(2);

// 2. Write a makeList function that creates and returns a new function that implements a todo list. 
// The returned function should have the following behavior:

// When called with an argument that is not already on the list, it adds that argument to the list.
// When called with an argument that is already on the list, it removes the element from the list.
// When called without arguments, it prints all of the items on the list. If the list is empty, it prints an appropriate message.

function makeList() {
  let list = [];
  return function(todo) {
    let index = list.indexOf(todo);
    if (todo === undefined) {
      if(list.length === 0) {
        console.log('List is empty')
      } else {
        list.forEach(todo => console.log(todo))
      }
    } else if (index === -1) {
      list.push(todo);
      console.log(`${todo} added!`)
    } else if (index !== -1) {
      list.splice(index, 1)
      console.log(`${todo} removed!`)
    }
  }
}

// let list = makeList();
// list(); //The list is empty.

// list("make breakfast"); //make breakfast added!

// list("read book"); //read book added!

// list(); 
// // make breakfast
// // read book

// list("make breakfast"); //make breakfast removed!

// list(); //read book

// Modify the makeList function so that it returns an object that provides the interface shown above, 
// including add, list, and remove methods.

function makeList2() {
  let todoList = [];
    return {
      add(todo) {
        let index = todoList.indexOf(todo);
        index === -1 ? todoList.push(todo) : null;
        console.log(`${todo} added!`)
      },

      remove(todo) {
        let index = todoList.indexOf(todo);
        index !== -1 ? todoList.splice(index, 1) : null
        console.log(`${todo} removed!`)
      },

      list() {
        if(todoList.length === 0) {
          console.log('List is empty.')
        } else {
          todoList.forEach(todo => console.log(todo))
        }
      },
    }
}

let list = makeList2();
list.add('peas');
list.add('corn');
list.list();

list.remove('peas');

list.list();

