function stringRepeat(num, string) {
  /* =========== First way =========== */
  // let stringWord = "";
  // for (let i = 0; i < num; i++) {
  //   stringWord += string;
  // }
  // return stringWord;

  /* =========== Second way =========== */
  return string.repeat(num);
}

console.log(stringRepeat(3, "Mahmoud ")); // Mahmoud Mahmoud Mahmoud
console.log(stringRepeat(4, "Esmat ")); // Esmat Esmat Esmat Esmat
console.log(stringRepeat(2, "wal3aa ")); // wal3aa wal3aa
