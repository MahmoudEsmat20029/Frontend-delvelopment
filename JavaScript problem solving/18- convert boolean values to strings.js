function convertBooleanValuesToString(bool) {
  /* =========== First way =========== */
  return bool ? "Yes" : "No";
}

console.log(convertBooleanValuesToString(true)); // Yes
console.log(convertBooleanValuesToString(false)); // No
