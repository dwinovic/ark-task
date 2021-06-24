const wordReverse = (value) => {
  // Check type of input - input must be string value
  if (typeof value === 'string') {
    // convert string to array
    let filterWord = value.split(' ');
    let newArr = [];

    //  validate word if value string more than one word
    if (filterWord.length > 1) {
      // Reverse array
      for (let i = filterWord.length - 1; i >= 0; i--) {
        newArr.push(filterWord[i]);
      }
      let joinArr = newArr.join(' ');

      console.log(joinArr);
    } else {
      // Error handling
      console.log('Error. Input should be a sentences');
    }
  } else {
    // Error handling if input isn't string value
    console.log('Error. value should be a string');
  }
};

wordReverse('Saya Mencari Uang');
