/*

REQUIRE:
- function 3 params: 
  - nilaiAwal - number; 
  - nilaiAkhir - number;
  - dataArray - array;
- Validation 
  - nilaiAwal < nilaiAkhir
  - dataArray.length > 5
- searching data in array input
  - sorting result
  - print 

OUTPUT:
- seleksiNilai(15, 30, [2, 25, 4, 17, 10]);
- log [17, 25]

ALGORITHM:
- start
- declaration data array
- input data
- validate data input type
- validate range data input
- searching data in array input
- sorting result
- print 
- end

*/

const dataNilai = [2, 25, 12, 15, 11, 14, 4, 17, 21, 10, 22, 23];

const seleksiNilai = (nilaiAwal, nilaiAkhir, dataInput) => {
  // Validation data type input
  if (
    typeof nilaiAwal === 'number' &&
    typeof nilaiAkhir === 'number' &&
    Array.isArray(dataInput)
  ) {
    if (nilaiAkhir > nilaiAwal) {
      if (dataInput.length > 5) {
        const data = dataInput;
        const start = nilaiAwal;
        const end = nilaiAkhir;
        const newData = [];

        data.map((number) => {
          if (number > start && number < end) {
            newData.push(number);
          }
        });
        console.log(newData);

        newData.sort();
        console.log(newData);

        if (newData.length > 0) {
          // console.log('Nilai awal: ', start);
          // console.log('Nilai akhir: ', end);
          // console.log('Data Nilai: ', data);
          console.log('Nilai terseleksi', newData);
        } else {
          console.log('Jumlah angka dalam data nilai tidak ada');
        }
      } else {
        console.log('Error! Jumlah anggka dalam data input harus lebih dari 5');
      }
    } else {
      console.log('Error! Nilai akhir harus lebih besar daripada nilai awal');
    }
  } else {
    console.log(
      'Input data tidak sesuai. Nilai awal dan nilai akhir harus merupakan angka dan data nilai harus merupakan array'
    );
  }
};

seleksiNilai(4, 22, dataNilai);
