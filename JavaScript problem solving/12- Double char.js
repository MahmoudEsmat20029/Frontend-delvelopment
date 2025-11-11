function doubleChar(str) {
  /* =========== First way =========== */
  // let strArray = str.split("");
  // let emptyArray = [];
  // for (let i = 0; i < strArray.length; i++) {
  //   emptyArray.push(strArray[i].repeat(2));
  // }

  // return emptyArray.join("");

  /* =========== Second way =========== */
  return str
    .split("")
    .map((ch) => ch.repeat(2))
    .join("");
}

console.log(doubleChar("string")); // ssttrriinngg
console.log(doubleChar("Hello World!")); // HHeelllloo  WWoorrlldd!!
console.log(doubleChar("1234!_")); // 11223344!!__
