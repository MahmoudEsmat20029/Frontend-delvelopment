/*
  if number of two flowers are :
    (odd && even) => true
    (odd only) || (even only) => false
*/

function oppositeAttract(flower1, flower2) {
  /* =========== First way =========== */
  // if (flower1 % 2) {
  //   // if flower1 is odd
  //   if (!(flower2 % 2)) {
  //     // if flower2 is even
  //     return true;
  //   }
  // } else {
  //   // if flower1 is even
  //   if (flower2 % 2) {
  //     // if flower2 is odd
  //     return true;
  //   }
  // }

  // return false;

  /* =========== Second way =========== */
  // if (flower1 % 2 == 0 && flower2 % 2 == 1) {
  //   return true;
  // } else if (flower1 % 2 == 1 && flower2 % 2 == 0) {
  //   return true;
  // }

  // return false;

  /* =========== Third way =========== */
  return flower1 % 2 !== flower2 % 2;
}

console.log(oppositeAttract(1, 1)); // false
console.log(oppositeAttract(2, 2)); // false
console.log(oppositeAttract(1, 2)); // true
console.log(oppositeAttract(2, 1)); // true

console.log(oppositeAttract(5, 5)); // false
console.log(oppositeAttract(6, 6)); // false
console.log(oppositeAttract(5, 6)); // true
console.log(oppositeAttract(6, 5)); // true
