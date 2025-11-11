function formattingToDecimalPlaces(num) {
  /* =========== First way =========== */
  // return num.toFixed(2);

  /* =========== Second way =========== */
  return Math.round(num * 100) / 100;
}

console.log(formattingToDecimalPlaces(1.3874)); // 1.39
console.log(formattingToDecimalPlaces(2.8735)); // 2.87
console.log(formattingToDecimalPlaces(3.3497)); // 3.35
console.log(formattingToDecimalPlaces(4.2033)); // 4.20
