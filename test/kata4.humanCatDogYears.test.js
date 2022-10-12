const { humanCatDogYears } = require("../src");

describe("humanCatDogYearArray", () => {
  test("create human/cat/dog array", () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
  });
});

// Look Ma, no handlebars!!!
