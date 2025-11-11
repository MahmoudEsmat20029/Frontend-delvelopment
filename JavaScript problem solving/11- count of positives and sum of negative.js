function countOfPoisitveAndSumOfNegative(arr) {
  /* =========== First way =========== */
  // let count = 0,
  //   sum = 0;

  // arr.forEach((element) => {
  //   if (element > 0) {
  //     count++;
  //   } else {
  //     sum += element;
  //   }
  // });

  // return [count, sum];

  /* =========== Second way =========== */
  // let positiveArray = arr.filter((x) => x > 0);
  // let negativeArray = arr
  //   .filter((x) => x < 0)
  //   .reduce((acc, current) => acc + current, 0);

  // return [positiveArray.length, negativeArray];

  /* =========== Third way =========== */
  let count = 0,
    sum = 0;

  arr.forEach((element) => {
    element > 0 ? count++ : (sum += element);
  });

  return [count, sum];
}

console.log(countOfPoisitveAndSumOfNegative([1, 2, 3, 4, 5])); // [5, 0]
console.log(countOfPoisitveAndSumOfNegative([1, 2, 3, -4, -5])); // [3, -9]
console.log(countOfPoisitveAndSumOfNegative([-1, -2, -3, -4, -5])); // [0, -15]
