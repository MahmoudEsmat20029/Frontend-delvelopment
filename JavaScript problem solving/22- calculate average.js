function calculateAverage(arr) {
  /* =========== First way =========== */
  // let total = 0;

  // arr.forEach((element) => {
  //   total += element;
  // });

  // return total / arr.length;

  /* =========== Second way =========== */
  return arr.reduce((acc, current) => acc + current, 0) / arr.length;
}

console.log(calculateAverage([1, 2, 3, 4])); // 2.5
console.log(calculateAverage([2, 4, 6, 8])); // 5
