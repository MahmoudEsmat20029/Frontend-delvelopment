export const API_KEY = "AIzaSyBzzz14lhF6BzD3Mve_jIla8V-uHkwHERs";

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
