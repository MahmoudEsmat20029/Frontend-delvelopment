function countBits(n) {
  /* =========== First way =========== */
  // let bitNum = n.toString(2).split("");
  // return bitNum.reduce((acc, current) => +acc + +current, 0);

  /* =========== Second way =========== */
  // return n
  //   .toString(2)
  //   .split("")
  //   .filter((ele) => ele == 1).length;

  /* =========== Third way =========== */
  // return n.toString(2).replace(/0/g,'').length;

  /* =========== Fourth way =========== */
  return n.toString(2).split("0").join("").length;
}

console.log(countBits(0)); // 0
console.log(countBits(4)); // 1
console.log(countBits(7)); // 3
console.log(countBits(9)); // 2
console.log(countBits(10)); // 2
console.log(countBits(1234)); // 5
