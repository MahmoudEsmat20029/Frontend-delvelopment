function returningNegative(num) {
  /* =========== First way =========== */
  return num > 0 ? -num : num;
}

console.log(returningNegative(1)); // -1
console.log(returningNegative(2)); // -2
console.log(returningNegative(3)); // -3
console.log(returningNegative(4)); // -4
console.log(returningNegative(5)); // -5
console.log(returningNegative(-1)); //-1
console.log(returningNegative(-2)); // -2
console.log(returningNegative(-3)); // -3
console.log(returningNegative(-4)); // -4
console.log(returningNegative(-5)); // -5
