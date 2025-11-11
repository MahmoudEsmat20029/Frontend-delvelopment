// removing the even elements

function removingElements(arr) {
  /* =========== First way =========== */
  // for (let i = 1; i < arr.length; i++) {
  //   arr.splice(i, 1);
  // }

  // return arr;

  /* =========== Second way =========== */
  // let newArray = [];
  // for (let i = 0; i < arr.length; i += 2) {
  //   newArray.push(arr[i]);
  // }

  // return newArray;

  /* =========== Third way =========== */
  return arr.filter((element, index) => index % 2 == 0);
}

console.log(removingElements([1, 2, 3, 4, 5, 6])); // [1, 3, 5]
console.log(removingElements([45, 67, 86, 3, 7])); // [45, 86, 7]
