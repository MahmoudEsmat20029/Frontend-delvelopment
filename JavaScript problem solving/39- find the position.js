function findThePosition(letter) {
  /* =========== First way =========== */
  // const alphabet = "abcdefghijklmnopqrstuvwxyz";
  // let index;

  // for (let i = 0; i < alphabet.length; i++) {
  //   if (letter.toLowerCase() == alphabet[i]) {
  //     index = i + 1;
  //     break;
  //   }
  // }

  // return `position of alphabet is: ${index}` || null;

  /* =========== Second way =========== */
  // const alphabet = "abcdefghijklmnopqrstuvwxyz";
  // let index = alphabet.indexOf(letter.toLowerCase()) + 1;

  // return `position of alphabet is: ${index}` || null;

  /* =========== Third way =========== */
  return letter.toUpperCase().charCodeAt() - 64;
}

console.log(findThePosition("a")); // 1
console.log(findThePosition("b")); // 2
console.log(findThePosition("y")); // 25
console.log(findThePosition("z")); // 26

console.log(findThePosition("A")); // 1
console.log(findThePosition("B")); // 2
console.log(findThePosition("Y")); // 25
console.log(findThePosition("Z")); // 26
