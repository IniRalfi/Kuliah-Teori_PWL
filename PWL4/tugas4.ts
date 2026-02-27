function sapa(param: string | number): string {
  if (typeof param === "string") {
    return `Halo, ${param}`;
  } else {
    return `Umur: ${param} tahun`;
  }
}
console.log(sapa("Rafli"));
console.log(sapa(20));
