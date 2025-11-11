// rent the car = 40$ for one day
// if you rent car for 3 days or more get 20$ offer
// if you rent car for 7 days or more get 50$ offer

function transportationOnVacation(days) {
  /* =========== First way =========== */
  let offer = 0;
  if (days >= 7) {
    offer = 50;
  } else if (days >= 3) {
    offer = 20;
  }

  return days * 40 - offer;
}

console.log(transportationOnVacation(1)); // 40
console.log(transportationOnVacation(2)); // 80
console.log(transportationOnVacation(3)); // 100
console.log(transportationOnVacation(4)); // 140
console.log(transportationOnVacation(5)); // 180
console.log(transportationOnVacation(6)); // 220
console.log(transportationOnVacation(7)); // 230
console.log(transportationOnVacation(8)); // 270
console.log(transportationOnVacation(9)); // 310
console.log(transportationOnVacation(10)); // 350
