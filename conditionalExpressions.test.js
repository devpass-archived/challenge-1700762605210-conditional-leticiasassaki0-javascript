const { getMax, isEven } = require('./conditionalExpressions');

test('Get maximum of two numbers', () => {
  const number1 = 10;
  const number2 = 5;
  expect(getMax(number1, number2)).toBe(10);
});

test('Check if a number is even', () => {
  const number = 10;
  expect(isEven(number)).toBe(true);
});