class Lingkaran {
  phi = 3.14;
  jariJari: number;

  constructor(r: number) {
    this.jariJari = r;
  }

  hitungLuas(): number {
    return this.phi * this.jariJari * this.jariJari;
  }
}

const lingkaran1 = new Lingkaran(7);
const lingkaran2 = new Lingkaran(10);

// Tampilkan hasilnya
console.log(`Lingkaran dengan jari-jari ${lingkaran1.jariJari} = ${lingkaran1.hitungLuas()}`);
console.log(`Lingkaran dengan jari-jari ${lingkaran2.jariJari} = ${lingkaran2.hitungLuas()}`);
