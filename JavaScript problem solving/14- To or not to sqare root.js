function toOrNotToSquareRoot(arr) {
  /* =========== First way =========== */
  // return arr.map((x) => {
  //   if (Math.sqrt(x) * Math.sqrt(x) === x) {
  //     return Math.sqrt(x);
  //   } else {
  //     return x * x;
  //   }
  // });

  /* =========== Second way =========== */
  // return arr.map((x) =>
  //   Math.sqrt(x) * Math.sqrt(x) === x ? Math.sqrt(x) : x * x
  // );

  /* =========== Third way =========== */
  return arr.map((x) =>
    Number.isInteger(Math.sqrt(x)) ? Math.sqrt(x) : x * x
  );
}

console.log(toOrNotToSquareRoot([1, 2, 3, 4, 5, 6, 7])); // [1, 4, 9, 2, 25, 36, 49]
console.log(toOrNotToSquareRoot([1, 4, 9, 16, 25, 36, 49])); // [1, 2, 3, 4, 5, 6, 7]
console.log(toOrNotToSquareRoot([2, 2, 2, 3, 3, 3])); // [4, 4, 4, 9, 9, 9]
console.log(toOrNotToSquareRoot([4, 4, 4, 9, 9, 9])); // [2, 2, 2, 3, 3, 3]
