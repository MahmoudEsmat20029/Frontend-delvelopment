function doIGetABonus(salary, bonus) {
  /* =========== First way =========== */
  return bonus ? salary * 10 : salary;
}

console.log(doIGetABonus(5000, true)); // 50000
console.log(doIGetABonus(400, false)); // 400
console.log(doIGetABonus(1223, true)); // 12230
console.log(doIGetABonus(1243, false)); // 1243
