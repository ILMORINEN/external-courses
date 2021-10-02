function maxArrayValue(inputArray) {
  let maxValue = 0;
  let i = 0;
  while (!maxValue) {
    if (typeof inputArray[i] === 'number') {
      maxValue = inputArray[i];
    }
    i += 1;
  }
  for (let j = i; j < inputArray.length; j += 1) {
    if (maxValue < inputArray[j]) {
      maxValue = inputArray[j];
    }
  }
  return maxValue;
}

module.exports = maxArrayValue;
