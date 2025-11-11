function countByX(x, n) {
  /* =========== First way =========== */
  // let emptyArray = [];

  // for (let i = 0; emptyArray.length != n; i += x) {
  //   i ? emptyArray.push(i) : "";
  // }

  // return emptyArray;

  /* =========== Second way =========== */
  // let emptyArray = [];

  // for (let i = 1; i <= n; i++) {
  //   emptyArray.push(i * x);
  // }

  // return emptyArray;

  /* =========== Third way =========== */
  return Array.from(Array(n + 1).keys())
    .slice(1)
    .map((element) => element * x);
}

console.log(countByX(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(countByX(2, 5)); // [2, 4, 6, 8, 10]
console.log(countByX(3, 5)); // [3, 6, 9, 12, 15]
