const check_permutation = (strOne, strTwo) => {
  if (strOne.length != strTwo.length) {
    return false;
  }
  const strOneArray = Array.from(strOne).sort();
  const strTwoArray = Array.from(strTwo).sort();

  strOne = strOneArray.join("");
  strTwo = strTwoArray.join("");

  return strOne === strTwo;
};


module.exports = check_permutation;
