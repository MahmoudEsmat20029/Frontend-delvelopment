function exclamationMarks(str) {
  /* =========== First way =========== */
  // let newArray = str.split("");
  // if (newArray[newArray.length - 1] === "!") {
  //   newArray.pop();
  // }

  // return newArray.join("");

  /* =========== Second way =========== */
  return str.replace(/!$/, "");
}

console.log(exclamationMarks("Hi!")); // Hi
console.log(exclamationMarks("Hi!!!")); // Hi!!
console.log(exclamationMarks("!Hi")); // !Hi
console.log(exclamationMarks("!Hi!")); // !Hi
console.log(exclamationMarks("Hi! Hi!")); // Hi! Hi
console.log(exclamationMarks("Hi")); // Hi
