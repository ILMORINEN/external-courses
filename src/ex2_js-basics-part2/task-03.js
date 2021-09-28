function masNumberCounter(inputMas) {
  const countedValues = [0, 0, 0];
  for (let i = 0; i < inputMas.length; i += 1) {
    if (typeof inputMas[i] === 'number') {
      if (inputMas[i] === 0) {
        countedValues[2] += 1;
      } else if (inputMas[i] % 2 === 0) {
        countedValues[0] += 1;
      } else {
        countedValues[1] += 1;
      }
    }
  }
  return countedValues;
}
module.exports = masNumberCounter;
