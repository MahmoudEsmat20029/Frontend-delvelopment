function spinWords(string) {
  /* =========== First way =========== */
  // let newArray = string.split(" ");

  // for (let i = 0; i < newArray.length; i++) {
  //   if (newArray[i].length >= 5) {
  //     newArray[i] = newArray[i].split("").reverse().join("");
  //   }
  // }

  // return newArray.join(" ");

  /* =========== Second way =========== */
  // return string
  //   .split(" ")
  //   .map((element) =>
  //     element.length >= 5 ? element.split("").reverse().join("") : element
  //   )
  //   .join(" ");

  /* =========== Third way =========== */
  return string.replace(/\w{5,}/g, function (word) {
    return word.split("").reverse().join("");
  });
}

console.log(spinWords("Hey fellow warriors")); // Hey wollef sroirraw
console.log(spinWords("This is a test")); // This is a test
console.log(spinWords("This is another test")); // This is rehtona test
