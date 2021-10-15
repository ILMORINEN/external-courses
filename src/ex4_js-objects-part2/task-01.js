function findInPrototype(property, object) {
  if (object.__proto__.hasOwnProperty(property)) {
    return object.__proto__[property];
  }

  return undefined;
}

module.exports = findInPrototype;
