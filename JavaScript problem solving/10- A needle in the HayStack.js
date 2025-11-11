function aNeedleInTheHayStack(arr) {
  /* =========== First way =========== */
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === "needle") {
  //     return `found the needle at position ${i}`;
  //   }
  // }

  // return "not found";

  /* =========== Second way =========== */
  return "found the needle at position " + arr.indexOf("needle");
}

console.log(aNeedleInTheHayStack([])); // not found
console.log(aNeedleInTheHayStack(["ok", "not ok"])); // not found
console.log(aNeedleInTheHayStack(["needle", "ok"])); // found the needle at position 1
console.log(aNeedleInTheHayStack(["ok", "needle"])); // found the needle at position 1
console.log(aNeedleInTheHayStack(["ok", "not ok", "needle"])); // found the needle at position 3
