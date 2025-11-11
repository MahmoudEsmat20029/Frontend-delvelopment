function cakes(recipe, available) {
  /* =========== First way =========== */
  // let recipeKeys = Object.keys(recipe);
  // let num = 0;
  // let result = 0;

  // // to check all recipe needs are available
  // for (let i = 0; i < recipeKeys.length; i++) {
  //   if (!available.hasOwnProperty(recipeKeys[i])) {
  //     return 0;
  //   }
  // }

  // // after check
  // // to can calculate accurate
  // num = Math.floor(available[recipeKeys[0]] / recipe[recipeKeys[0]]);

  // for (let i = 0; i < recipeKeys.length; i++) {
  //   if (available[recipeKeys[i]] >= recipe[recipeKeys[i]]) {
  //     result = Math.floor(available[recipeKeys[i]] / recipe[recipeKeys[i]]);
  //     num = num > result ? result : num;
  //   } else {
  //     return 0;
  //   }
  // }

  // return num;

  /* =========== Second way =========== */
  // to take smallest value
  return Math.min(
    // to get array of property name and map it
    ...Object.keys(recipe).map((key) =>
      // get number of cakes can make
      Math.floor(available[key] / recipe[key] || 0)
    )
  );
}

let recipe = { flour: 500, sugar: 200, eggs: 1 };
let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };

console.log(cakes(recipe, available)); // 2

recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
available = { sugar: 500, flour: 2000, milk: 2000 };

console.log(cakes(recipe, available)); // 0
