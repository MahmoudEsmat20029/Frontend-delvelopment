let div = document.querySelector(".msg");
let success = "Successfully finished";
let fail = "The mission is failed";
let invalid = "The mission is invalid";

function toastCall(msg) {
  let toast = document.createElement("p");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  div.appendChild(toast);

  if (msg.includes("failed")) {
    toast.classList.add("fail");
  } else if (msg.includes("invalid")) {
    toast.classList.add("invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 5000);
}
