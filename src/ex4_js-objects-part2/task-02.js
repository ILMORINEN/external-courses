function createNonProtObject() {
  const nonProtObject = Object.create(null);

  return nonProtObject;
}

module.exports = createNonProtObject;
