interface Buku {
  judul: string;
  pengarang: string;
  tahunTerbit: number;
  tersedia: boolean;
}

const buku1: Buku = {
  judul: "Laskar Pelangi",
  pengarang: "Andrea Hirata",
  tahunTerbit: 2025,
  tersedia: true,
};

const buku2: Buku = {
  judul: "Bumi Manusia",
  pengarang: "Pramoedya Ananta Toer",
  tahunTerbit: 1980,
  tersedia: true,
};

function infoBuku(buku: Buku): string {
  const status = buku.tersedia ? "Tersedia" : "Sedang dipinjam";
  return `"${buku.judul}" oleh ${buku.pengarang} (${buku.tahunTerbit}) - ${status}`;
}

console.log(infoBuku(buku1));
console.log(infoBuku(buku2));
