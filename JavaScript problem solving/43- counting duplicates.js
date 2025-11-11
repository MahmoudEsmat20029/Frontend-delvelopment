function duplicateCount(text) {
  /* =========== First way =========== */
  text = text.toLowerCase();

  let newText = [...new Set(text)];

  if (text.length === newText.length) return 0; // can remove it

  return newText.filter((ch) => text.split(ch).length - 1 > 1).length;
}

console.log(duplicateCount("abcde")); // 0
console.log(duplicateCount("aabbcde")); // 2
console.log(duplicateCount("aabBcde")); // 2
console.log(duplicateCount("indivisibility")); // 1
console.log(duplicateCount("Indivisibilities")); // 2
console.log(duplicateCount("aA11")); // 2
console.log(duplicateCount("ABBA")); // 2
