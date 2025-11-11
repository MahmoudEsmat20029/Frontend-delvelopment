function getCount(str) {
  /* =========== First way =========== */
  // const vowels = ["a", "e", "i", "o", "u"];
  // let counter = 0;

  // for (let i = 0; i < str.length; i++) {
  //   if (vowels.includes(str[i])) {
  //     counter++;
  //   }
  // }

  // return counter;

  /* =========== Second way =========== */
  return (str.match(/[aeiou]/gi) || []).length;
}

console.log(getCount("mahmoud")); // 3
console.log(getCount("esmat")); // 2
