function sentanceSmash(wordsArray) {
  /* =========== First way =========== */
  return wordsArray.join(" ");
}

console.log(sentanceSmash(["Mahmoud", "Esmat", "Abdullah"])); // Mahmoud Esmat Abdullah
console.log(sentanceSmash(["Hello", "world"])); // Hello world
