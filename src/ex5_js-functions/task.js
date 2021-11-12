function Calculator() {
  const returnedObject = {};
  let state = 0;

  returnedObject.add = function add(...numbers) {
    numbers.forEach((element) => {
      state += element;
    });
    return add;
  };
  returnedObject.subtract = function subtract(...numbers) {
    numbers.forEach((element) => {
      state -= element;
    });
    return subtract;
  };
  returnedObject.divide = function divide(...numbers) {
    numbers.forEach((element) => {
      state /= element;
    });
    return divide;
  };
  returnedObject.multiply = function multiply(...numbers) {
    numbers.forEach((element) => {
      state *= element;
    });
    return multiply;
  };
  returnedObject.getResult = function getResult() {
    return state;
  };
  returnedObject.reset = function reset() {
    state = 0;
  };
  returnedObject.toString = function toString() {
    return state;
  };
  return returnedObject;
}

const calculator = Calculator();

module.exports = calculator;
