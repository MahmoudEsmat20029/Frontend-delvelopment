function invertValues(arr) {
  /* =========== First way =========== */
  return arr.map((x) => -x);
}

console.log(invertValues([1, -1, 6, -7, -5])); // [-1, 1, -6, 7, 5]
console.log(invertValues([-1, -2, -3, -4, -5])); // [1, 2, 3, 4, 5]
console.log(invertValues([1, 2, 3, 4, 5])); // [-1, -2, -3, -4, -5]
