const { booleanToWord } = require("../src");

describe("booleanToWord", () => {

  let myArray = [1,2,3,4,5,6];
  let testObject = { name: "Bob", age: 34 };

  test('boolean returns True', () => {
    expect(booleanToWord(true)).toEqual('Yes');
    expect(booleanToWord(myArray.length === 6)).toEqual('Yes');
    expect(booleanToWord( testObject.name === "Bob" )).toEqual('Yes');
  });

  test('boolean returns False', () => {
    expect(booleanToWord(false)).toEqual('No');
    expect(booleanToWord(myArray[3] === 3)).toEqual('No');
    expect(booleanToWord(testObject.age === 23)).toEqual('No');
  });


});