/*
REQUIREMENTS:
- continuance programs with: 
  - than catch
  - try catch
- explain about try catch

*/
console.log('program 1');
const dayVerify = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
      let check = dataDay.find((item) => {
        return item === day.toLowerCase();
      });
      if (check) {
        resolve(check);
      } else {
        reject(new Error(`Today is not a workday`));
      }
    }, 3000);
  });
};

// USING THEN CATCH
const asyncWeekday = (day) => {
  return dayVerify(day)
    .then((res) => {
      // THEN => digunakan untuk menghandle kembalian nilai dari promise bernilai resolve
      console.log('Result using then catch:', res);
    })
    .catch((error) => {
      // CATCH => digunakan untuk menghandle kembalian nilai dari promise bernilai reject
      console.log('Err in then catch:', error);
    });
};

// USING TRY CATCH
const checkWeekday = async (day) => {
  // TRY => menghandle function async dan dilakukan pengecekan kode promise jika kembalian nilai success (resolve) maka akan menjalankan scope code sampai selesai,
  try {
    const data = await dayVerify(day);
    console.log('result using try catch: ', data);
  } catch (err) {
    // CATCH => menghandle apabila kembalian nilai dari promise yg telah dijalankan di scope try diatas bernilai error (rejected) maka akan menjalankan scope code catch
    const error = err.message;
    // console.log(typeof err);
    console.log('handle in try catch: ', error);
  }
};

console.log('program 2', checkWeekday('senin'));
console.log('program 3', asyncWeekday('senin'));
console.log('program 4');
