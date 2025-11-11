function switchItUp(num) {
  /* =========== First way =========== */
  let numsArray = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  return numsArray[num] || "wrong number";
}

console.log(switchItUp(0)); // zero
console.log(switchItUp(1)); // one
console.log(switchItUp(2)); // two
console.log(switchItUp(3)); // three
console.log(switchItUp(4)); // four
console.log(switchItUp(5)); // five
console.log(switchItUp(6)); // six
console.log(switchItUp(7)); // seven
console.log(switchItUp(8)); // eight
console.log(switchItUp(9)); // nine
console.log(switchItUp(10)); // wrong number
