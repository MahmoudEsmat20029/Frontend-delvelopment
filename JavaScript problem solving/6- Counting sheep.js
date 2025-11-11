function countingSheep(arr) {
  /* =========== First way =========== */
  let counter = 0;
  arr.forEach((element) => {
    if (element) {
      counter++;
    }
  });
  return counter;
}

console.log(countingSheep([false, false])); // 0
console.log(countingSheep([true, false])); // 1
console.log(countingSheep([false, true])); // 1
console.log(countingSheep([true, true])); // 2
