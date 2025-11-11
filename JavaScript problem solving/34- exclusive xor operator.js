function exclusiveXorOperator(bool1, bool2) {
  /* =========== First way =========== */
  // return bool1 ^ bool2 ? true : false;

  /* =========== Second way =========== */
  return bool1 == bool2 ? false : true;
}

console.log(exclusiveXorOperator(false, false)); // false
console.log(exclusiveXorOperator(true, false)); // true
console.log(exclusiveXorOperator(false, true)); // true
console.log(exclusiveXorOperator(true, true)); // false
