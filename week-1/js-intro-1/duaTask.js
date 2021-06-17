const mtk = 80;
const indoBahasa = 80;
const inggrisBahasa = 80;
const ipa = 80;

const inputNilai = mtk && indoBahasa && inggrisBahasa && ipa;
// console.log(inputNilai);

const errorInfo = 'Nilai harus diisi semua!.';

if (inputNilai) {
  if (
    typeof mtk === 'number' &&
    typeof indoBahasa === 'number' &&
    typeof inggrisBahasa === 'number' &&
    typeof ipa === 'number'
  ) {
    // Operasi penjumlahan total nilai
    let arrNilai = [mtk, indoBahasa, inggrisBahasa, ipa];
    let sumNilai = arrNilai.reduce((sum, num) => sum + num);

    // Rata - rata nilai
    let avgNilai = sumNilai / arrNilai.length;

    console.log(`Rata - rata = ${avgNilai}`);

    // Penentuan grade
    if (avgNilai >= 90) {
      return console.log('Grade: A');
    } else if (avgNilai >= 80 && avgNilai <= 89) {
      return console.log('Grade: B');
    } else if (avgNilai >= 70 && avgNilai <= 79) {
      return console.log('Grade: C');
    } else if (avgNilai >= 60 && avgNilai <= 96) {
      return console.log('Grade: D');
    } else {
      return console.log('Grade: E');
    }
  } else {
    console.log('Input nilai harus berupa angka (number) semua!');
  }
} else {
  console.log('Upps, nilai mata pelajaran harus terisi semua');
  // Nilai yang kosong
  if (!mtk) {
    return console.log(`Nilai Matematika kosong.`);
  }
  if (!indoBahasa) {
    return console.log(`Nilai Bahasa Indonesia kosong.`);
  }
  if (!inggrisBahasa) {
    return console.log(`Nilai Bahasa Inggris kosong.`);
  }
  if (!ipa) {
    return console.log(`Nilai IPA kosong.`);
  }
}
