const check_permutation = (strOne, strTwo) => {
  if (strOne.length != strTwo.length) {
    return false;
  }
  const orderedStrOne = Array.from(strOne).sort().join("");
  const orderedStrTwo = Array.from(strTwo).sort().join("");

  return orderedStrOne === orderedStrTwo;
};

module.exports = check_permutation;
