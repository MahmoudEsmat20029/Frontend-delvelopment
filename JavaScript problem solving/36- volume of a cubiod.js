class kata {
  static volumeOfACubiod(length, width, height) {
    /* =========== First way =========== */
    return length * width * height;
  }
}

console.log(kata.volumeOfACubiod(1, 2, 3)); // 6
console.log(kata.volumeOfACubiod(2, 4, 6)); // 48
console.log(kata.volumeOfACubiod(3, 6, 9)); // 162
