function addBinary(a, b) {
  /* =========== First way =========== */

  return (a + b).toString(2);
}

console.log(addBinary(0, 1)); // 1
console.log(addBinary(1, 1)); // 10
console.log(addBinary(1, 2)); // 11
console.log(addBinary(5, 9)); // 1110
console.log(addBinary(51, 12)); // 111111
