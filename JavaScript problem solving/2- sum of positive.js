function sumOfPositive(arr) {
  /* =========== First way =========== */
  // let sum = 0;

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] > 0) {
  //     sum += arr[i];
  //   }
  // }
  // return sum;

  // arr.forEach((element) => {
  //   if (element > 0) {
  //     sum += element;
  //   }
  // });
  // return sum;

  /* =========== Second way =========== */
  // filter return the number which output is true
  // reduce sum previous and current values (take initial value)
  return (
    arr
      // input [-1, 2, -3, -4, 5, -6]
      .filter((num) => num > 0)
      // output: [2, 5]
      .reduce((acc, current) => acc + current, 0)
      // output: 0 + 2 + 5 = 7
  );
}

console.log(sumOfPositive([-1, 2, -3, -4, 5, -6])); // 7
console.log(sumOfPositive([1, 2, 3, 4, 5, 6])); // 21
console.log(sumOfPositive([-1, -2, -3, -4, -5, -6])); // 0
console.log(sumOfPositive([-1, -2, -3, 4, 5, 6])); // 15
console.log(sumOfPositive([1, 2, 3, 4, -5, -6])); // 10
console.log(sumOfPositive([1, -2, -3, -4, -5, -6])); // 1
