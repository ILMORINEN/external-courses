function checkProperty(propertyName, inputObject) {
  // eslint-disable-next-line no-restricted-syntax
  if (inputObject.hasOwnProperty(propertyName)) {
    return true;
  }

  return false;
}

module.exports = checkProperty;
