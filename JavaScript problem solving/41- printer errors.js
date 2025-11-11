function printerError(s) {
  /* =========== First way =========== */
  // let errors = 0;

  // for (let i = 0; i < s.length; i++) {
  //   if (!(s.charCodeAt(i) > 96 && s.charCodeAt(i) < 110)) {
  //     errors++;
  //   }
  // }

  // return `${errors}/${s.length}`;

  /* =========== Second way =========== */
  // const alphabet = "abcdefghijklm";
  // let errors = 0;

  // for (let i = 0; i < s.length; i++) {
  //   if (!alphabet.includes(s[i])) {
  //     errors++;
  //   }
  // }
  // return `${errors}/${s.length}`;

  /* =========== Third way =========== */
  let errors = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] < "a" || s[i] > "m") {
      errors++;
    }
  }

  return `${errors}/${s.length}`;
}

console.log(printerError("aaabbbbhaijjjm")); // 0/14
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm")); // 8/22
