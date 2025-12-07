const passwordInput = document.getElementById("password");
const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%^&*()_+~|{}[]<>/-=";

const allChars = upperCase + lowerCase + numbers + symbols;

generateBtn.onclick = function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  password = password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  passwordInput.value = password;
};

copyBtn.onclick = function () {
  if (!passwordInput.value) {
    alert("The input is empty !");
    return;
  }

  passwordInput.select();

  navigator.clipboard
    .writeText(passwordInput.value)
    .then(() => alert("The input is Copied successfully"));
};
