// [1, 2, 3, 4, 6, 7, 8, 9] --> 6 is non consecutive

function firstNonConsecutiveNumber(arr) {
  /* =========== First way =========== */
  let element;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      element = arr[i + 1];
      break;
    }
  }

  return element || null;
}

console.log(firstNonConsecutiveNumber([1, 2, 3, 4, 6, 7, 8, 9])); // 6
console.log(firstNonConsecutiveNumber([1, 2, 3, 4])); // null
console.log(firstNonConsecutiveNumber([1, 2, 3, 4, 8, 9])); // 8
