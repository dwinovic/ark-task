/*
- REQUIREMENTS:
	continuence programs with callback function
		print all month with mapping

- ALGORITHMS:
  - start 
  - declaration function 
  - await get data
  - mapping
  - print
  - end
*/

const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'Juni',
      'July',
      'August',
      'September',
      'October',
      'November',
      'Desember',
    ];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error('Sorry Data Not Found', []), null);
    }
  }, 4000);
};

const getAll = async () => {
  await getMonth((param1, param2) => {
    if (param1) {
      const error = param1.message;

      return console.log(error);
    }

    const data = param2.map((item) => {
      console.log(item);
    });

    return data;
  });
  console.log('hello');
};

console.log('Program 1');
// console.log('Program 2', getAll());
getAll();
