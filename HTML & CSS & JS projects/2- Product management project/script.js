/*
  Author: Mahmoud Esmat
  Date  : 3-11-2025
*/

// ================ Global variables ================
let products = JSON.parse(localStorage.getItem("products")) || [];

// to fill html
let createBox = document.getElementById("create-box");
let tableBody = document.getElementById("table-body");

// Buttons
let searchByTitle = document.getElementById("search-title");
let searchByCategory = document.getElementById("search-category");
let createBtn = document.getElementById("create-btn");
let cancelBtn = document.getElementById("cancel");
let okBtn = document.getElementById("ok");
let deleteAllBtn = document.getElementById("delete-all-btn");
let renameBtn = document.getElementById("rename-btn");

// inputs
let search = document.getElementById("search");
let title = document.getElementById("title");
let price = document.getElementById("price");
let tax = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let totalCalc = document.getElementById("total-calc");
let count = document.getElementById("count");
let category = document.getElementById("category");
let name = document.getElementById("name");

//
let edit = false;
let editIndex = 0;

// ================ Events ================
searchByTitle.addEventListener("click", () => {
  if (search.value !== "") {
    tableBody.innerHTML = "";

    products.forEach((product, index) => {
      if (search.value.toLowerCase() === product.title.toLowerCase()) {
        let inner = tableBodyInner(product, index);
        tableBody.innerHTML += inner;
      }
    });
  } else {
    productsDisplay();
  }
});

searchByCategory.addEventListener("click", () => {
  if (search.value !== "") {
    tableBody.innerHTML = "";

    products.forEach((product, index) => {
      if (search.value.toLowerCase() === product.category.toLowerCase()) {
        let inner = tableBodyInner(product, index);
        tableBody.innerHTML += inner;
      }
    });
  } else {
    productsDisplay();
  }
});

createBtn.addEventListener("click", () => {
  createBox.style.display = "flex";
});

okBtn.addEventListener("click", () => {
  if (title.value == "" || title.value == null) {
    alert("You must write the title of the product !!");
  } else {
    let newProduct = {
      title: title.value,
      price: price.value,
      taxes: tax.value,
      ads: ads.value,
      discount: discount.value,
      total: totalCalc.innerHTML,
      category: category.value,
    };

    if (edit) {
      products.splice(editIndex, 1, newProduct);
      edit = false;
    } else {
      console.log(count.value);
      if (count.value !== "") {
        for (let i = 0; i < count.value; i++) {
          products.push(newProduct);
        }
      } else {
        products.push(newProduct);
      }
    }

    productsDisplay();

    title.value =
      price.value =
      tax.value =
      ads.value =
      discount.value =
      category.value =
      count.value =
      totalCalc.innerHTML =
        "";
    createBox.style.display = "none";
  }
});

cancelBtn.addEventListener("click", () => {
  createBox.style.display = "none";
});

renameBtn.addEventListener("click", () => {
  let namePrompt = prompt("Enter Your name:", "your name ...");

  if (name !== "") {
    name.innerHTML = namePrompt;
  }
});

deleteAllBtn.addEventListener("click", () => {
  products = [];
  productsDisplay();
});

// ================ Functions ================
function productsDisplay() {
  tableBody.innerHTML = "";

  products.forEach((product, index) => {
    let inner = tableBodyInner(product, index);
    tableBody.innerHTML += inner;
  });
  toStoreDataToLocalStorage();
}

function tableBodyInner(product, index) {
  return `
          <tr>
            <td>${index + 1}</td>
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>${product.taxes}</td>
            <td>${product.ads}</td>
            <td>${product.discount}</td>
            <td>${product.total}</td>
            <td>${product.category}</td>
            <td><span onclick="productUpdate(${index})" class="update">update</span></td>
            <td><span onclick="productDelete(${index})" class="delete">delete</span></td>
          </tr>
        `;
}

function pricOfProduct() {
  let sum = +price.value + +tax.value + +ads.value - +discount.value;

  totalCalc.innerHTML = sum;
}

function productUpdate(id) {
  createBox.style.display = "flex";
  products.forEach((product, index) => {
    if (index === id) {
      title.value = product.title;
      price.value = product.price;
      tax.value = product.taxes;
      ads.value = product.ads;
      discount.value = product.discount;
      category.value = product.category;
      totalCalc.innerHTML = product.total;
      edit = true;
      editIndex = id; // editIndex = index;
    }
  });
}

function productDelete(id) {
  products.splice(id, 1);
  productsDisplay();
}

function toStoreDataToLocalStorage() {
  localStorage.setItem("products", JSON.stringify(products));
}

// ================ initial call ================
productsDisplay();

let namePrompt = prompt("Enter Your name:", "your name ...");

if (name !== "") {
  name.innerHTML = namePrompt;
}


