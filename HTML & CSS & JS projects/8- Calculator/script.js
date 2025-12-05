const calculatorContainer = document.getElementById("calculator_container");
const displayArea = document.getElementById("display_area");

let isValue = false;
let resultMemory = null;

calculatorContainer.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    if (isValue) {
      displayArea.textContent = "";
      isValue = false;
    }

    switch (e.target.textContent) {
      case "C":
        clear();
        break;
      case "DEL":
        deleteOneValue();
        break;
      case "=":
        evaluate();
        break;
      default:
        addToDisplayArea(e.target.textContent);
    }
  }
});

function clear() {
  displayArea.textContent = "";
}

function deleteOneValue() {
  let currentContent = displayArea.textContent;
  displayArea.textContent = currentContent.substring(
    0,
    currentContent.length - 1
  );
}

function evaluate() {
  try {
    checkANS();
    let calculation = math.evaluate(displayArea.textContent);
    displayArea.textContent = calculation;
    resultMemory = calculation;
  } catch (error) {
    displayArea.textContent = "Invalid Operation";
    console.log(error);
  }

  isValue = true;
}

function addToDisplayArea(value) {
  displayArea.textContent += value;
}

function checkANS() {
  if (displayArea.textContent.includes("Ans")) {
    displayArea.textContent = displayArea.textContent.replace(
      "Ans",
      resultMemory
    );
  }
}
