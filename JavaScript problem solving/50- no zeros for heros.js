// removing all 0 at the last of number

function noZerosForHeros(num) {
  /* =========== First way =========== */
  // let str = String(num).split("");
  // let lastChar = "";

  // while (str[str.length - 1] === "0") {
  //   str.pop();
  // }

  // return Number(str.join(""));

  /* =========== Second way =========== */
  return Number(String(num).replace(/0+$/g, ""));
}

console.log(noZerosForHeros(1450)); // 145
console.log(noZerosForHeros(960000)); // 96
console.log(noZerosForHeros(1050)); // 105
console.log(noZerosForHeros(-1050)); // -105
