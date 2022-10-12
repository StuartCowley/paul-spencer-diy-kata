const humanCatDogYears = (number) => {
  let catYears = 0;
  let dogYears = 0;
  let result = [];

  for (let i = 1; i < number + 1; i++) {
    if (i === 1) {
      catYears = 15;
      dogYears = 15;
    }

    if (i === 2) {
      catYears = 15 + 9;
      dogYears = 15 + 9;
    }

    if (i >= 3) {
      catYears += 4;
      dogYears += 5;
    }
  }
  result[0] = number;
  result[1] = catYears;
  result[2] = dogYears;

  return result;
};

module.exports = humanCatDogYears;
