const mahasiswa = {
  id: 1,
  nama: "Andi",
  prodi: "Sistem Informasi",
  hobi: ["Coding", "Gaming"],
};

// Destructuring: Ambil nama dan prodi langsung
const { nama, prodi } = mahasiswa;
console.log(`Mahasiswa bernama ${nama} dari prodi ${prodi}`);

// Spread Operator: Tambah hobi baru tanpa merusak hobi lama
const hobiBaru = [...mahasiswa.hobi, "Membaca"];
console.log("Hobi Baru:", hobiBaru);
