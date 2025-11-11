function keepHydrated(time) {
  /* =========== First way =========== */
  return Math.floor(time * 0.5);
}

// drink 0.5 liter per one hour (need floor number)
console.log(keepHydrated(3)); // 1
console.log(keepHydrated(6.7)); // 3
console.log(keepHydrated(11.8)); // 5
