/*
Output:
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1

n = 5
str = n - 1

*/

const printSegitiga = (num) => {
  if (typeof num === 'number') {
    let box = '';

    for (let row = 0; row <= num; row++) {
      for (let col = 1; col <= num - row; col++) {
        box += col + ' ';
      }
      box += '\n';
    }

    return box;
  } else {
    return console.log('Input harus berupa number!');
  }
};

console.log(printSegitiga(5));
