function convertANumberToString(num) {
  /* =========== First way =========== */
  // return num.toString();

  /* =========== Second way =========== */
  return `${num}`;
}

console.log(convertANumberToString(1234567)); // 1234567
console.log(typeof convertANumberToString(1234567)); // string
