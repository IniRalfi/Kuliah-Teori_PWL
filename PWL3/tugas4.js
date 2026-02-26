const daftarNilai = [80, 45, 90, 60, 30, 100];

// Filter: Cari yang lulus (di atas 60)
const lulus = daftarNilai.filter((nilai) => nilai >= 60);

// Map: Ubah angka menjadi teks
const statusNilai = daftarNilai.map((nilai) => (nilai >= 60 ? "Lulus" : "Remedial"));

console.log("Daftar Lulus:", lulus);
console.log("Status Mahasiswa:", statusNilai);
