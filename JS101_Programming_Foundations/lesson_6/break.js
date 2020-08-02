let counter = 1;

while (counter <= 5){
  console.log(counter);
  counter++
}


let array = [1, 2, 3];

function pushArray(array) {
  return array.push(4);
}

pushArray(array);
console.log(array);