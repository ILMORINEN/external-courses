function addPropIfMissing(propertyName, inputObject) {
  const newObj = {};

  Object.assign(newObj, inputObject);
  if (!inputObject.hasOwnProperty(propertyName)) {
    newObj[propertyName] = 'new';
  }

  return newObj;
}

module.exports = addPropIfMissing;
