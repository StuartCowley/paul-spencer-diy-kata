const joinNames = (namesObj) => {
  let nameText = "";
  let outputString = "";

  for (let i = 0; i < namesObj.length; i++) {
    nameText = namesObj[i].name;

    if (i < namesObj.length - 2) {
      outputString += nameText;
      outputString += ", ";
    }

    if (i === namesObj.length - 2) {
      outputString += nameText;
    }

    if (i === namesObj.length - 1) {
      outputString += " & ";
      outputString += nameText;
    }
  }

  return outputString;
};
module.exports = joinNames;
