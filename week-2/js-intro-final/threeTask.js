/*
ALGORITHMS:
  1. Start
  2. Validate input must be number
  3. Conversion input value to string, 
  4. Divide the input value into a nested array based on the condition (0)
  5. Sorting ascending result of devide numbers in array with looping 
  6. Conversion each string element in array result before to array dan do sorting
  7. Combine each item element to one array
  8. Combine all element in array to one sentence
  9. Print result
  10. End
*/

// 01. Start
const divideAndSort = (value) => {
  // 02. Validation input value
  // console.log('Input value: ', value);
  if (typeof value !== 'number') {
    return console.log('Error. Input value must be a number');
  }

  // 03. Conversion input value to string,
  let dataNumbers = value.toString();
  console.log(typeof dataNumbers);
  // 04. Divide the input value into a nested array based on condition (0)
  const divideNumbers = dataNumbers.split(0);
  console.log(divideNumbers);

  // 05. Sorting result of devide numbers in array with looping
  const sorting = divideNumbers.map((item) => {
    // 06. Conversion each string element in array result before to array dan do sorting
    const element = Object.values(item).sort();
    console.log(element);
    // 07. Combine each item element to one array
    const sortedElement = element.join('');
    console.log(sortedElement);
    return sortedElement;
  });

  // 08. Combine all element in array to one sentence
  console.log(sorting);
  const joining = sorting.join('');
  const print = parseInt(joining);

  // 09. Print result
  console.log('Result: ', print);
};
// 10. End

divideAndSort(5956560159466056);

// example = 5956560159466056
// example = 98706540321
