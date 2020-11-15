// Implement an ancestors method that returns the prototype chain (ancestors) of a calling object as an array of object names. 
// Below is an example output:
let foo = {name: 'foo'};

Object.prototype.ancestors = function() {
  let listOfAncestors = [];
  let ancestor = Object.getPrototypeOf(this).name;
  
    listOfAncestors.push(ancestor);

  return listOfAncestors;
}

console.log(foo)


// name property added to make objects easier to identify
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

console.log(bar.constructor.name)

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']

// Implement the following diagram using the pseudo-classical approach. 
// Subclasses should inherit everything from the superclass and not just the methods. 
// Reuse the constructors of the superclass when implementing a subclass.

class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  communicate() {
    console.log('I am communicating');
  }

  eat() {
    console.log('I am eating');
  }

  sleep() {
    console.log('I am sleeping');
  }
}

class Doctor extends Person {
  constructor(firstName, lastName, age, gender, specialization) {
    super(firstName, lastName, age, gender);
    this.specialization = specialization;
  }

  diagnose() {
    console.log('I can diagnose');
  }
}

class Professor extends Person {
  constructor(firstName, lastName, age, gender, subject) {
    super(firstName, lastName, age, gender);
    this.subject = subject;
  }

  teach() {
    console.log('I am teaching');
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, gender, degree) {
    super(firstName, lastName, age, gender);
    this.degree = degree;
  }

  study() {
    console.log('I am studying');
  }
}

class GraduateStudent extends Student {
  constructor(firstName, lastName, age, gender, degree, graduateDegree) {
    super(firstName, lastName, age, gender, degree);
    this.graduateDegree = graduateDegree;
  }

  research() {
    console.log('I am researching');
  }
}

let person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person);     // logs true
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'
console.log(person.fullName());            // logs 'foo bar'

let doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

let graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'

/*
A circular queue is a collection of objects stored in a buffer that is treated as though it is connected end-to-end in a circle. 
When an object is added to this circular queue, it is added to the position that immediately follows the most recently added object, 
while removing an object always removes the object that has been in the queue the longest.

This works as long as there are empty spots in the buffer. 
If the buffer becomes full, adding a new object to the queue requires getting rid of an existing object; 
with a circular queue, the object that has been in the queue the longest is discarded and replaced by the new object.

Assuming we have a circular queue with room for 3 objects, the circular queue looks and acts like this:

*/

class CircularQueue {
  constructor(bufferSize) {
    this.bufferSize = bufferSize;
    this.queue = new Array(bufferSize).fill(null);
    this.nextPosition = 0;
    this.oldestPosition = 0;
  }

  returnQueue() {
    return this.queue;
  }

  enqueue(object) {
    // if (this.queue.length < this.bufferSize) {
    //   this.queue.push(object)
    // } else {
    //   this.queue.shift();
    //   this.queue.push(object);
    // }

    for (let i = 0; i < bufferSize; i++) {
      if (this.queue[i] === null) {
        this.queue[i] = object;
      }
    }
  }

  dequeue() {
    //return this.queue.length === 0 ? null : this.queue.shift();
  }
}

let queue = new CircularQueue(3);
console.log(queue.returnQueue());


// console.log(queue.dequeue() === null);

// queue.enqueue(1);
// queue.enqueue(2);
// console.log(queue.dequeue() === 1);

// queue.enqueue(3);
// queue.enqueue(4);
// console.log(queue.dequeue() === 2);

// queue.enqueue(5);
// queue.enqueue(6);
// queue.enqueue(7);
// console.log(queue.dequeue() === 5);
// console.log(queue.dequeue() === 6);
// console.log(queue.dequeue() === 7);
// console.log(queue.dequeue() === null);

// let anotherQueue = new CircularQueue(4);
// console.log(anotherQueue.dequeue() === null);

// anotherQueue.enqueue(1)
// anotherQueue.enqueue(2)
// console.log(anotherQueue.dequeue() === 1);

// anotherQueue.enqueue(3)
// anotherQueue.enqueue(4)
// console.log(anotherQueue.dequeue() === 2);

// anotherQueue.enqueue(5)
// anotherQueue.enqueue(6)
// anotherQueue.enqueue(7)
// console.log(anotherQueue.dequeue() === 4);
// console.log(anotherQueue.dequeue() === 5);
// console.log(anotherQueue.dequeue() === 6);
// console.log(anotherQueue.dequeue() === 7);
// console.log(anotherQueue.dequeue() === null);

