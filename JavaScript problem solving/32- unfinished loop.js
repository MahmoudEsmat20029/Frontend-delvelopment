// Bug-fixing

/* =========== Wrong code =========== */
// function unfinishedLoop() {
// var newArray = [];

// for(var counter = 1; counter <= number;){
//   newArray.push(counter)
// }

//   return newArray;
// }

/* =========== Right code =========== */
function unfinishedLoop(number) {
  /* =========== First way =========== */
  var newArray = [];

  for (var counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }

  return newArray;
}

console.log(unfinishedLoop(5));
