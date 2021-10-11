function NumberAndStingReturn(inputValue) {
  if (typeof inputValue === 'number') {
    if (isNaN(inputValue)) {
      return undefined;
    }
    return 'number';
  } if (typeof inputValue === 'string') {
    return 'string';
  }
  return undefined;
}

module.exports = NumberAndStingReturn;
