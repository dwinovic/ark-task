/*

REQUIRE: 
- Searching data array
- limit data
- callback function

- input = function name ("an", 3, callback);
- Output 
-- ['Alexandra', 'Amanda', 'Angela']; 

ALGORITHM:
- start
- input 
- validate type, limit, callback 
- Searching data array (looping array)
- Searching index element (looping index)
- compare each element with input
- if equal push to new data
- else ignore
- callback
- end

*/
// Database Mock
const names = [
  'Abigail',
  'Alexandra',
  'Alison',
  'Amanda',
  'Angela',
  'Bella',
  'Carol',
  'Caroline',
  'Carolyn',
  'Deirdre',
  'Diana',
  'Elizabeth',
  'Ella',
  'Faith',
  'Olivia',
  'Penelope',
];

const searchName = (what, limitData, callback) => {
  // validate type, limit, and callback must be exist
  if (!what || !limitData || !callback) {
    console.log('Error input invalid');
  } else {
    // validate input data type
    if (
      (typeof what === 'string',
      typeof limitData === 'number',
      typeof callback === 'function')
    ) {
      // Looping input process
      let newData = [];
      let databases = names;
      const want = new RegExp(`${what}`, 'i');
      // console.log(want);

      databases.map((item) => {
        // looping element
        const search = want.exec(item);
        // console.log(search);

        // validate result of searching
        if (search) {
          newData.push(item);
        }
      });

      // console.log('Databases', databases);
      // console.log('Data filtered', newData);
      // Sending data response to callback
      const data = {
        request: { what, limitData },
        response: newData,
      };

      callback(data);
    }
  }
};

// print output with CALLBACK
const printResult = (print) => {
  // Destructuring data response
  const { request, response } = print;
  console.log('User request: ', request);
  console.log('Total Response Data: ', response);

  // Validate result of data searching
  if (response.length === 0) {
    console.log('Data not found!');
  } else {
    const data = response;
    const newData = [];
    const limitDataOutput = [];

    // Ordering  list output
    data.map((item, index) => {
      const order = index + 1;
      const addNumber = `${order}. ${item}`;
      newData.push(addNumber);
    });

    // Limitation
    for (let start = 0; start < request.limitData; start++) {
      limitDataOutput.push(newData[start]);
    }

    // console.log(limitDataOutput);
    // OUTPUT
    const message = `Hasil pencarian keyword ${request.what} dengan limit ${request.limitData} sebagai berikut: ${limitDataOutput}`;

    console.log(message);
  }
};

// RUNNING FUNCTION

searchName('i', 4, printResult);

// RESEARCH

// let data = 'koko';
// var myRe = /you/i;
// var myArray = myRe.exec('wahyoU');

// console.log(myRe);
// console.log(myArray !== null);

// let three = 3;
// let re = new RegExp(`${three}`, 'g'); // = /.{1,3}/g
// console.log(re);
