const isPallindrom = (value) => {
  let reverseString = '';

  // Check type of input value
  if (typeof value === 'string') {
    // Convert input value string to lower case
    let inputLowerCase = value.toLocaleLowerCase();

    // Reverse string value
    for (let i = inputLowerCase.length - 1; i >= 0; i--) {
      reverseString += inputLowerCase[i];
      console.log(reverseString);
    }

    // Check is pallindrom
    if (inputLowerCase === reverseString) {
      console.log(`${value} is a pallindrom`);
    } else {
      console.log(`${value} isn't pallindrom`);
    }
  } else {
    console.log('Error! Input value should be a string');
  }
};

isPallindrom('Malam siang');
