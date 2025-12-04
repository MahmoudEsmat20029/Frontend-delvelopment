/*
  Author: Mahmoud Esmat
  Date  : 4-12-2025
*/

// =========== Global Variables ===========
const input = document.getElementById("input");
const addBtn = document.getElementById("add-btn");
const sections = document.querySelectorAll("section");

// To catch the item which dragged
let drag = null;

// =========== Events ===========
addBtn.addEventListener("click", () => {
  if (input.value == "") return;

  sections[0].innerHTML += `<p class="item" draggable="true">${input.value}</p>`;
  input.value = "";

  dragItem();
});

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

sections.forEach((section) => {
  section.addEventListener("dragover", (e) => {
    e.preventDefault();
    section.style.background = "#396";
  });

  section.addEventListener("dragleave", () => {
    section.style.background = "#5657";
  });

  section.addEventListener("drop", () => {
    section.style.background = "#5657";
    section.append(drag);
  });
});

// =========== Functions ===========
function dragItem() {
  let items = document.querySelectorAll(".item");

  items.forEach((item) => {
    item.addEventListener("dragstart", () => {
      drag = item;
      item.style.opacity = 0.5;
    });

    item.addEventListener("dragend", () => {
      drag = null;
      item.style.opacity = 1;
    });
  });
}
