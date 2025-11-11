function removeStringSpaces(str) {
  /* =========== First way =========== */
  // let newArray = str.split("");

  // newArray.forEach((element, index) => {
  //   if (element === " ") {
  //     newArray.splice(index, 1);
  //   }
  // });

  // return newArray.join("");

  /* =========== Second way =========== */
  return str.split(" ").join("");
}

console.log(removeStringSpaces("Mahmoud Esmat")); // MahmoudEsmat
console.log(removeStringSpaces("Are You Ok ?")); // AreYouOk?
