function dublicateValuesCheck(inputArray) {
  let allDublicates = true;
  const firstValue = inputArray[0];
  for (let i = 1; i < inputArray.length; i += 1) {
    if (inputArray[i] !== firstValue) {
      allDublicates = false;
    }
  }
  return allDublicates;
}

module.exports = dublicateValuesCheck;
