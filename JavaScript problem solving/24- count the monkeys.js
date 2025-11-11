function countTheMonkeys(num) {
  /* =========== First way =========== */
  // return Array.from(Array(num + 1).keys()).slice(1);

  /* =========== Second way =========== */
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }

  return arr;
}

console.log(countTheMonkeys(10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(countTheMonkeys(1)); // [1]
