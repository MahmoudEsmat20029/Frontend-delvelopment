function convertAStringToANumber(str) {
  /* =========== First way =========== */
  // return Number(str);

  /* =========== Second way =========== */
  return +str;
}

console.log(convertAStringToANumber("1234")); // 1234
console.log(typeof convertAStringToANumber("1234")); // number
console.log(convertAStringToANumber("605")); // 605
console.log(typeof convertAStringToANumber("605")); // number
console.log(convertAStringToANumber("-7")); // -7
console.log(typeof convertAStringToANumber("-7")); // number
