const title = document.getElementById("title");

window.onload = function () {
  if (window.navigator.onLine) {
    onLine();
  } else {
    offLine();
  }
};

window.addEventListener("online", () => {
  onLine();
});

window.addEventListener("offline", () => {
  offLine();
});

function onLine() {
  title.innerHTML = "Online Now";
  title.style.color = "green";
}

function offLine() {
  title.innerHTML = "Offline Now";
  title.style.color = "gray";
}
