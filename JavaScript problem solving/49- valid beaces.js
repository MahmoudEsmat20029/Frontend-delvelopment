function validBraces(braces) {
  /* =========== First way =========== */
  const stack = [];
  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of braces) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      if (stack.pop() !== pairs[char]) {
        return false; // mismatch
      }
    }
  }

  return stack.length === 0;
}

console.log(validBraces("(){}[]")); // true
console.log(validBraces("([{}])")); // true
console.log(validBraces("(}")); // false
console.log(validBraces("[(])")); // false
console.log(validBraces("[({})](]")); // false
