function dublicateValuesCheck(inputMas) {
  let allDublicates = true;
  const firstValue = inputMas[0];
  for (let i = 1; i < inputMas.length; i += 1) {
    if (inputMas[i] !== firstValue) {
      allDublicates = false;
    }
  }
  return allDublicates;
}

module.exports = dublicateValuesCheck;
