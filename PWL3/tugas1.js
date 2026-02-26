// --- CARA LAMA (ES5) ---
var nama = "Budi";
function sapaES5(user) {
  return "Halo " + user + ", selamat datang!";
}
console.log(sapaES5(nama));

// --- CARA MODERN (ES6) ---
// 1. Gunakan const/let
const namaModern = "Budi";

// 2. Gunakan Arrow Function & Template Literals
const sapaES6 = (user) => `Halo ${user}, selamat datang di era modern!`;

console.log(sapaES6(namaModern));

// 3. Membuat function perkalian dengan arrow
const perkalian = (a, b) => {
  return a * b;
};
