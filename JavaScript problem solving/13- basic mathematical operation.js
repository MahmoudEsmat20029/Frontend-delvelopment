function basicMathematicalOperation(operation, num1, num2) {
  /* =========== First way =========== */
  // let result = 0;

  // switch (operation) {
  //   case "+":
  //     result = num1 + num2;
  //     break;
  //   case "-":
  //     result = num1 - num2;
  //     break;
  //   case "*":
  //     result = num1 * num2;
  //     break;
  //   case "/":
  //     result = num1 / num2;
  //     break;
  //   case "%":
  //     result = num1 % num2;
  //     break;
  // }

  // return result;

  /* =========== Second way =========== */
  // return eval(num1, operation, num2);
  /*                 Or                 */
  return eval(num1 + operation + num2);
}

console.log(basicMathematicalOperation("+", 4, 7)); // 11
console.log(basicMathematicalOperation("-", 15, 18)); // -3
console.log(basicMathematicalOperation("*", 5, 5)); // 25
console.log(basicMathematicalOperation("/", 49, 7)); // 7
console.log(basicMathematicalOperation("%", 48, 7)); // 6
