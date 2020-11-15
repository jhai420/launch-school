// The code below is expected to output the following when run:

// > let helloVictor = createGreeter('Victor');
// > helloVictor.greet('morning');
// = Good Morning Victor

// However, it instead results in an error. What is the problem with the code? Why isn't it producing the expected results?
// Forgot to add 'this" ahead of accessing the properties in the object. 

function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${this.morning} ${this.name}`;
          break;
        case 'afternoon':
          msg += `${this.afternoon} ${this.name}`;
          break;
        case 'evening':
          msg += `${this.evening} ${this.name}`;
          break;
      }

      console.log(msg);
    },
  };
}

let helloVictor = createGreeter('Victor');
helloVictor.greet('morning');

// A grocery store uses a JavaScript function to calculate discounts on various items. 
// They are testing out various percentage discounts but are getting unexpected results. 
// Go over the code, and identify the reason why they aren't getting the expected discounted prices from the function. 
// Then, modify the code so that it produces the correct results.

let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    let discount = this.price * (percent / 100);
    let newPrice = this.price - discount;
    
    return newPrice;
  },
};

// console.log(item.discount(20));
// console.log(item.discount(50));
// console.log(item.discount(25));

/*

In JavaScript, comparing two objects either with == or === checks for object identity. 
In other words, the comparison evaluates to true if it's the same object on either side of == or ===. 
This is a limitation, in a sense, because sometimes we need to check if two objects have the same key/value pairs. 
JavaScript doesn't give us a way to do that.

Write a function objectsEqual that accepts two object arguments and returns true or false 
depending on whether the objects have the same key/value pairs.

*/

function objectsEqual(obj1, obj2) {
  // Create a list of object entries from both obj1 and obj2.
  // If the length of the two object entries are the same, then proceed to next step. Otherwise return false. 
  // Sort the list of object entries
  // Iterate through one list and match with second list. When there is a discrepancy, return false
  // If it reaches the end of the loop, return true. 

  let entries1 = Object.entries(obj1).sort();
  let entries2 = Object.entries(obj2).sort();
  console.log(entries1);
  console.log(entries2);

  if (entries1.length !== entries2.length) {
    return false;
  }

  for (let i = 0; i < entries1.length; i++) {
    for (let j = 0; j <= 1; j++) {
      if (entries1[i][j] !== entries2[i][j]) {
        return false
      }
    }
    
  }

  return true;

}

// console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
// console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
// console.log(objectsEqual({}, {}));                                      // true
// console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

/*
Create an object factory for a student object. 
The student object should have the following methods and it should produce the expected results demonstrated in the sample code:

info: Logs the name and year of the student.
addCourse: Enrolls student in a course. A course is an object literal that has properties for its name and code.
listCourses: Returns a list of the courses student has enrolled in.
addNote: Adds a note property to a course. Takes a code and a note as an argument. If a note already exists, the note is appended to the existing one.
updateNote: Updates a note for a course. Updating a note replaces the existing note with the new note.
viewNotes: Logs the notes for all the courses. Courses without notes are not displayed.

*/

function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],
    info: function() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    addCourse: function(course) {
      this.courses.push(course);
    },

    listCourses: function() {
      console.log(this.courses);
      return this.courses;
    },

    addNote: function(courseCode, note) {
      this.courses.forEach(course => {
        if(course.code === courseCode) {
          if(!course.note) {
            course.note = []
          }
          course.note.push(note);
        }
      })
    },

    updateNote: function(courseCode, note) {
      this.courses.forEach(course => {
        if(course.code === courseCode) {
          course.note = [];
          course.note.push(note);
        }
      })
    },

    viewNotes: function() {
      this.courses.forEach(course => {
        if(course.note) {
          console.log(`${course.name}: ${course.note.join('; ')}`)
        }
      })
    },
  }
}

let foo = createStudent('Foo', '1st');
// foo.info(); // "Foo is a 1st year student"
// foo.listCourses() //[];
// foo.addCourse({ name: 'Math', code: 101 });
// foo.addCourse({ name: 'Advanced Math', code: 102 });
// foo.listCourses(); //[{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
// foo.addNote(101, 'Fun course');
// foo.addNote(101, 'Remember to study for algebra');
// foo.viewNotes(); // "Math: Fun course; Remember to study for algebra"
// foo.addNote(102, 'Difficult subject');
// foo.viewNotes(); // "Math: Fun course; Remember to study for algebra" "Advance Math: Difficult subject"
// foo.updateNote(101, 'Fun course');
// foo.viewNotes(); // "Math: Fun course" // "Advanced Math: Difficult subject"

/*
Create a school object. The school object uses the student object from the previous exercise. 
It has methods that use and update information about the student. 
Be sure to check out the previous exercise for the other arguments that might be needed by the school object. 
Implement the following methods for the school object:

addStudent: Adds a student by creating a new student and adding the student to a collection of students. 
The method adds a constraint that the year can only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'. 
Returns a student object if year is valid otherwise it logs "Invalid Year".
enrollStudent: Enrolls a student in a course.
addGrade: Adds the grade of a student for a course.
getReportCard: Logs the grades of a student for all courses. If the course has no grade, it uses "In progress" as the grade.
courseReport: Logs the grades of all students for a given course name. Only student with grades are part of the course report.

To test your code, use the three student objects listed below. 
Using the three student objects, produces the following values from the getReportCard and courseReport methods respectively.
*/

let school = {
  students: [],

  addStudent(name, year) {
    if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      let newStudent = createStudent(name, year);
      this.students.push(newStudent);
      return newStudent;
    } else {
      console.log("Invalid Year");
    }
  },

  enrollStudent(student, courseName, courseCode) {
    let course = {name: courseName, code: courseCode};
    student.addCourse(course);
  },

  addGrade(student, courseCode, grade) {
    student.courses.forEach(course => {
      if(course.code === courseCode) {
        course.grade = grade
      }
    })
  },

  getReportCard(student) {
    student.courses.forEach(course => {
      if(course.grade) {
        console.log(`${course.name}: ${course.grade}`)
      } else {
        console.log(`${course.name}: In progress`)
      }
    })
  },
  
  courseReport(courseName) {

    // Create an empty object literal
    // Iterate through the students and look for the provided courseName within courses 
      // If there is a grade, then add the student's name as a property and the grade as a value 
    // Return object 
    
    let studentGrades = {};
    this.students.forEach(student => {
      student.courses.forEach(course => {
        if (course.name === courseName && !isNaN(course.grade)) {
          studentGrades[student.name] = course.grade
        }
      })
    })

    let gradeValues = Object.values(studentGrades)
    let gradesCount = gradeValues.length;

    if (gradesCount === 0) {
      console.log(`No course report available for ${courseName}`);
    } else {
      let courseAverage = (gradeValues.reduce((a, b) => a + b)) / gradesCount
      console.log(`=${courseName} Grades=`)
      for (let student in studentGrades) {
        console.log(`${student}: ${studentGrades[student]}`)
      }
      console.log(`---`);
      console.log(`Course Average: ${courseAverage}`)
    }
        
  },
    
};

foo = {
  name: 'foo',
  year: '3rd',
  courses: [
    { name: 'Math', code: 101, grade: 95, },
    { name: 'Advanced Math', code: 102, grade: 90, },
    { name: 'Physics', code: 202, }
  ],
}

bar = {
  name: 'bar',
  year: '1st',
  courses: [
    { name: 'Math', code: 101, grade: 91, },
  ],
}

qux = {
  name: 'qux',
  year: '2nd',
  courses: [
    { name: 'Math', code: 101, grade: 93, },
    { name: 'Advanced Math', code: 102, grade: 90, },
   ],
}

school.students.push(foo, bar, qux);

school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');

