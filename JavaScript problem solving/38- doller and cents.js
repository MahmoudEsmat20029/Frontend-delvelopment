function dollarAndCents(amount) {
  /* =========== First way =========== */
  return `$${amount.toFixed(2)}`;
}

console.log(dollarAndCents(3)); // $3.00
console.log(dollarAndCents(3.1)); // $3.10
