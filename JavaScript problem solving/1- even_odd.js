// for numbers
function even_odd(num) {
  /* =========== First way =========== */
  // if(num % 2 == 0) {
  //   return "Even";
  // }
  // return "Odd";

  /* =========== Second way =========== */
  return num % 2 ? "Odd" : "Even";
}

console.log(even_odd(1)); // Odd
console.log(even_odd(2)); // Even
console.log(even_odd(3)); // Odd
console.log(even_odd(4)); // Even
console.log(even_odd(5)); // Odd
console.log(even_odd(6)); // Even

// for arrays
function oddOrEven(array) {
  /* =========== First way =========== */
  let sum = array.reduce((acc, current) => acc + current, 0);

  return sum % 2 ? "odd" : "even";
}

console.log(oddOrEven([0])); // even
console.log(oddOrEven([1])); // odd
console.log(oddOrEven([])); // even

console.log(oddOrEven([0, 1, 5])); // even
console.log(oddOrEven([0, 1, 3])); // even
console.log(oddOrEven([1023, 1, 2])); // even

console.log(oddOrEven([0, 1, 2])); // odd
console.log(oddOrEven([0, 1, 4])); // odd
console.log(oddOrEven([1023, 1, 3])); // odd
