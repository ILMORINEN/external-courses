function arrayNumberCounter(inputArray) {
  const countedValues = [0, 0, 0];
  for (let i = 0; i < inputArray.length; i += 1) {
    if (typeof inputArray[i] === 'number') {
      if (inputArray[i] === 0) {
        countedValues[2] += 1;
      } else if (inputArray[i] % 2 === 0) {
        countedValues[0] += 1;
      } else {
        countedValues[1] += 1;
      }
    }
  }
  return countedValues;
}
module.exports = arrayNumberCounter;
