/* =========== This is the wrong code =========== */
// function secretMessage(name) {
//   return "Hello, " + name + "!";
//   if (name === "Johnny")
//     return "Hello, my love";
// }

/* =========== This is the right code =========== */
function secretMessage(name) {
  /* =========== First way =========== */
  // if (name === "Johnny") {
  //   return "Hello, my love";
  // } else {
  //   return "Hello, " + name + "!";
  // }

  /* =========== Second way =========== */
  return name === "Johnny" ? "Hello, my love" : "Hello, " + name + "!";
}

console.log(secretMessage("Mahmoud")); // Hello, Mahmoud!
console.log(secretMessage("ljdoc")); // Hello, ljdoc!
console.log(secretMessage("flmml")); // Hello, flmml!
console.log(secretMessage("Johnny")); // Hello, my love
