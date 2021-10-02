function printArrayElements(inputArray) {
  for (let i = 0; i < inputArray.length; i += 1) {
    console.log(inputArray[i]);
  }
  console.log(inputArray.length);
  return null;
}

module.exports = printArrayElements;
