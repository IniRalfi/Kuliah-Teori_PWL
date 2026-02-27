export default function sapa(nama: string, umur: number) {
  return `Halo ${nama}, tahun depan umur mu ${umur + 1}`;
}

const nama = "Rafli";
const umur = 18;

console.log(sapa(nama, umur));
