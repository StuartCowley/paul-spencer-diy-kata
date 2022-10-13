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
        name: "John",
      },
      {
        name: "Paul",
      },
      {
        name: "George",
      },
      {
        name: "Ringo",
      },
    ];

    expect(joinNames(namesObj1)).toEqual("Bart, Lisa & Maggie");
    expect(joinNames(namesObj2)).toEqual("John, Paul, George & Ringo");
  });
});
