const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    const namesObj1 = [
      {
        name: "Bart",
      },
      {
        name: "Lisa",
      },
      {
        name: "Maggie",
      },
    ];

    const namesObj2 = [
      {
        name: "Arthur",
      },
      {
        name: "Bob",
      },
      {
        name: "Celia",
      },
      {
        name: "Dennis",
      },
      {
        name: "Erin",
      },
      {
        name: "Fred",
      },
    ];

    expect(joinNames(namesObj1)).toEqual("Bart, Lisa & Maggie");
    expect(joinNames(namesObj2)).toEqual("Arthur, Bob, Celia, Dennis, Erin & Fred");
  });
});
