const { booleanToWord } = require("../src");

describe("booleanToWord", () => {

  let myArray=[1,2,3,4,5,6];


  test('boolean returns True', () => {
    expect(booleanToWord(true)).toEqual('Yes');
  });

  test('boolean returns False', () => {
    expect(booleanToWord(false)).toEqual('No');   
  });


});