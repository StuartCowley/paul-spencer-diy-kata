const numberToReversedDigits = (number) => {
  let numbertoArray = [];
  numbertoArray = number.toString().split("").reverse();
  const resultArray = [];

  for (let i = 0; i < numbertoArray.length; i++) {
    const newNumberString = numbertoArray[i];
    const newNumber = parseInt(newNumberString, 10)
    resultArray.push(newNumber);
  }
  return resultArray;
};

module.exports = numberToReversedDigits;
