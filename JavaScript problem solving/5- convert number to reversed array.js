function convertNumberToReversedArray(num) {
  /* =========== First way =========== */
  return num
    .toString()
    .split("")
    .reverse()
    .map((element) => Number(element));
}

console.log(convertNumberToReversedArray(123456789)); // [9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(convertNumberToReversedArray(657868432)); // [2, 3, 4, 8, 6, 8, 7, 5, 6]
console.log(convertNumberToReversedArray(827483827)); // [7, 2, 8, 3, 8, 4, 7, 2, 8]
console.log(convertNumberToReversedArray(948397437)); // [7, 3, 4, 7, 9, 3, 8, 4, 9]
