function areYouPlayingBanjo(name) {
  /* =========== First way =========== */
  // let newArray = name.split("");

  // if (newArray[0].toLowerCase() == "r") {
  //   return name + " plays banjo";
  // }

  // return name + " does not plays banjo";

  /* =========== Second way =========== */
  // if (name.charAt(0).toLowerCase() == "r") {
  //   return name + " plays banjo";
  // }

  // return name + " does not plays banjo";

  /* =========== Third way =========== */
  return name[0].toLowerCase() == "r"
    ? name + " plays banjo"
    : name + " does not plays banjo";
}

console.log(areYouPlayingBanjo("Mahmoud")); // Mahmoud does not plays banjo
console.log(areYouPlayingBanjo("Ramy")); // Ramy plays banjo
console.log(areYouPlayingBanjo("rahma")); // rahma plays banjo
console.log(areYouPlayingBanjo("Reham")); // Reham plays banjo
console.log(areYouPlayingBanjo("Mosaad")); // Mosaad does not plays banjo
