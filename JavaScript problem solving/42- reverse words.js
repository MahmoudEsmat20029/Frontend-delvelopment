function reverseWords(str) {
  /* =========== First way =========== */
  // let newArray = str.split(" ");

  // for(let i = 0; i < newArray.length; i ++) {
  //   newArray[i] = newArray[i].split("").reverse().join("");
  // }

  // return newArray.join(" ");
  /* =========== Second way =========== */
  return str
    .split(" ")
    .map((element) => element.split("").reverse().join(""))
    .join(" ");
}

console.log(reverseWords("This is an example!")); // sihT si na !elpmaxe
console.log(reverseWords("double  spaces")); // elbuod secaps
