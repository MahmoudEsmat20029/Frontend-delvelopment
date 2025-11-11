function sumWithoutHighestAndLowestNumber(arr) {
  if (arr.length >= 0 && arr.length <= 2) return 0;

  /* =========== First way =========== */
  // let highestNumber = arr[0];
  // let lowestNumber = arr[0];

  // arr.forEach((element) => {
  //   if (element > highestNumber) {
  //     highestNumber = element;
  //   }
  //   if (element < highestNumber) {
  //     lowestNumber = element;
  //   }
  // });

  // return (
  //   arr.reduce((acc, current) => acc + current, 0) -
  //   highestNumber -
  //   lowestNumber
  // );

  /* =========== Second way =========== */
  // let highestNumber = Math.max(...arr);
  // let lowestNumber = Math.min(...arr);

  // return (
  //   arr.reduce((acc, current) => acc + current, 0) -
  //   highestNumber -
  //   lowestNumber
  // );

  /* =========== Third way =========== */
  // let highestNumber = Math.max(...arr);
  // let lowestNumber = Math.min(...arr);

  // return arr
  //   .filter((num) => num !== highestNumber && num !== lowestNumber)
  //   .reduce((acc, current) => acc + current, 0);

  /* =========== Fourth way =========== */
  return (
    arr
      // input [5, 2, 8, 1, 6, 9, 3]
      .sort((x, y) => x - y)
      // output [1, 2, 3, 5, 6, 8, 9]
      .slice(1, -1)
      // output [2, 3, 5, 6, 8]
      .reduce((acc, current) => acc + current, 0)
  );
  // output 0 + 2 + 3 + 5 + 6 + 8 = 24
}

let result = sumWithoutHighestAndLowestNumber([5, 2, 8, 1, 6, 9, 3]);
console.log(result); // 24
result = sumWithoutHighestAndLowestNumber([1, 2, 3, 4, 5, 6]);
console.log(result); // 14
result = sumWithoutHighestAndLowestNumber([4, 6, 7, 9, 3, 2, 4]);
console.log(result); // 24
result = sumWithoutHighestAndLowestNumber([6, 5, 4, 3, 2, 1]);
console.log(result); // 14
