function reversingWordsInAString(words) {
  /* =========== First way =========== */
  // let arr = words.split("");
  // let str = "";
  // let newArray = [];

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] == " ") {
  //     newArray.push(str);
  //     str = "";
  //     continue;
  //   }
  //   str += arr[i];
  // }

  // newArray.push(str);
  // return newArray.reverse().join(" ");

  /* =========== Second way =========== */
  // let arr = words.split("");
  // let newArray = [];
  // let index = 0;

  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] == " ") {
  //     newArray.push(arr.slice(index, i).join(""));
  //     index = i + 1;
  //   }
  // }

  // newArray.push(arr.slice(index, arr.length).join(""));
  // return newArray.reverse().join(" ");

  /* =========== Third way =========== */
  return words.split(" ").reverse().join(" ");
}

console.log(reversingWordsInAString("Hello world")); // world Hello
console.log(reversingWordsInAString("Hi There")); // There Hi
