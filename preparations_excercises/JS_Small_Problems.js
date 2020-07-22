// Write a function that takes one integer argument, which may be positive, negative, or zero. 
// This method returns true if the number's absolute value is odd. 
// You may assume that the argument is a valid integer value.

function isItOdd (integer) {
  if (integer === 0) {
    console.log("Number is 0.");
  }
  else if (integer % 2 === 0) {
    console.log("Even");
  } 
  else {
    console.log("Odd");
  }
}