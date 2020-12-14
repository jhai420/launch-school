
class Todo {
  static DONE_MARKER = "X";
  static UNDONE_MARKER = " ";

  constructor(title) {
    this.title = title;
    this.done = false;
  }

  toString() {
    let marker = this.isDone() ? Todo.DONE_MARKER : Todo.UNDONE_MARKER;
    return `[${marker}] ${this.title}`;
  }

  markDone() {
    this.done = true;
  }

  markUndone() {
    this.done = false;
  }

  isDone() {
    return this.done;
  }

  getTitle() {
    return this.title;
  }
}

class TodoList {
  // Contains a collection of Todo objects

  constructor(title) {
    this.title = title;
    this.todos = [];
  }

  add(todo) {
    if (todo instanceof Todo) {
      this.todos.push(todo)
    } else {
      throw new TypeError('can only add Todo objects');
    }
  }

  size() {
    return this.todos.length;
  }

  first() {
    return this.todos[0];
  }

  last() {
    return this.todos[this.todos.length - 1];
  }

  itemAt(index) {
    this._validateIndex(index);
    return this.todos[index]
  }

  _validateIndex(index) {
    if (!(index in this.todos)) {
      throw new ReferenceError(`invalid index: ${index}`);
    }
  }

  markDoneAt(index) {
    this.itemAt(index).markDone();
  }

  markUndoneAt(index) {
    this.itemAt(index).markUndone();
  }

  isDone() {
    return this.todos.every(todo => todo.done);
  }

  shift() {
    return this.todos.shift();
  }

  pop() {
    return this.todos.pop();
  }

  removeAt(index) {
    return this.todos.splice(this.itemAt(index), 1);
  }

  toString() {
    let title = (`---- ${this.title} ----`);
    let list = this.todos.map(todo => todo.toString()).join("\n");
    return `${title}\n${list}`
  }

  forEach(callback) {
    this.todos.forEach(callback);
  }

  filter(callback) {
    let newList = new TodoList(this.title);
    
    this.todos.forEach(todo => {
      if (callback(todo)) {
        newList.add(todo)
      }
    })

    return newList;
  }

  findByTitle(title) {
    return this.filter(todo => todo.title === title).first();
  }

  allDone() {
    return this.filter(todo => todo.done)
  }

  allNotDone() {
    return this.filter(todo => !todo.done)
  }

  markDone(title) {
    let todo = this.findByTitle(title);
    if (todo !== undefined) {
      todo.markDone();
    }
  }

  markAllDone() {
    this.forEach(todo => todo.markDone());
  }

  markAllUndone() {
    this.forEach(todo => todo.markUndone());
  }

  toArray() {
    return this.todos.slice();
  }
}

let todo1 = new Todo("Buy milk");
let todo2 = new Todo("Clean room");
let todo3 = new Todo("Go to the gym");
let todo4 = new Todo("Go shopping");
let todo5 = new Todo("Feed the cats");
let todo6 = new Todo("Study for Launch School");
let list = new TodoList("Today's Todos");

list.add(todo1)
list.add(todo2)
list.add(todo3)
list.add(todo4)
list.add(todo5)
list.add(todo6)
todo1.markDone();
todo5.markDone();

let doneTodos = list.filter(todo => todo.isDone());
//console.log(doneTodos);
//console.log(list.toString());


//console.log(list.filter(todo => todo.isDone()).first());

// console.log(list.findByTitle('Feed'));

// console.log(list.allNotDone());
// list.markDone('Clean room');
// console.log(list.toString());

// list.markAllUndone();
// console.log(list.toString());

