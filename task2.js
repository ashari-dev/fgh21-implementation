function reverseWord(kalimat) {
  let hasil = "";
  let batasBawah = 0;
  for (let i = 0; i <= kalimat.length; i++) {
    if (kalimat[i] === " " || i === kalimat.length) {
      let batasAtas = i;
      let result = "";
      for (batasBawah; batasBawah < batasAtas; batasBawah++) {
        result = result + kalimat[batasBawah];
      }
      hasil = result + (hasil ? " " + hasil : hasil);
      batasBawah = batasBawah + 1;
    }
  }
  console.log(hasil);
}
reverseWord("ibu ke pasar");
