function maxMasValue(inputMas) {
  let maxValue = 0;
  let i = 0;
  while (!maxValue) {
    if (typeof inputMas[i] === 'number') {
      maxValue = inputMas[i];
    }
    i += 1;
  }
  for (let j = i; j < inputMas.length; j += 1) {
    if (maxValue < inputMas[j]) {
      maxValue = inputMas[j];
    }
  }
  return maxValue;
}

module.exports = maxMasValue;
