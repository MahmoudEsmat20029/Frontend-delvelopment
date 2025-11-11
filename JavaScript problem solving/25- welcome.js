let obj = {
  english: "Welcome",
  arabic: "أهلاً وسهلاً",
  french: "Bienvenue",
  spanish: "Bienvenido",
  german: "Willkommen",
  italian: "Benvenuto",
  portuguese: "Bem-vindo",
  russian: "Добро пожаловать",
  chinese: "欢迎",
  japanese: "ようこそ",
  korean: "환영합니다",
  turkish: "Hoş geldiniz",
  hindi: "स्वागत है",
  greek: "Καλώς ήρθατε",
  dutch: "Welkom",
  swedish: "Välkommen",
  polish: "Witamy",
  czech: "Vítejte",
  thai: "ยินดีต้อนรับ",
  indonesian: "Selamat datang",
};

function welcome(lang) {
  /* =========== First way =========== */
  return obj[lang] || obj["english"];
}

console.log(welcome("english")); // Welcome
console.log(welcome("arabic")); // أهلاً وسهلاً
console.log(welcome("french")); // Bienvenue
console.log(welcome("spanish")); // Bienvenido
console.log(welcome("german")); // Willkommen
console.log(welcome("italian")); // Benvenuto
console.log(welcome("portuguese")); // Bem-vindo
console.log(welcome("russian")); // Добро пожаловать
console.log(welcome("chinese")); // 欢迎
console.log(welcome("japanese")); // ようこそ
console.log(welcome("korean")); // 환영합니다
console.log(welcome("turkish")); // Hoş geldiniz
console.log(welcome("hindi")); // स्वागत है
console.log(welcome("greek")); // Καλώς ήρθατε
console.log(welcome("dutch")); // Welkom
console.log(welcome("swedish")); // Välkommen
console.log(welcome("polish")); // Witamy
console.log(welcome("czech")); // Vítejte
console.log(welcome("thai")); // ยินดีต้อนรับ
console.log(welcome("indonesian")); // Selamat datang

console.log(welcome("thacmdmi")); // welcome
console.log(welcome("kesian")); // welcome
