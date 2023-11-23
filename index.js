const { getMax, isEven } = require('./conditionalExpressions');

const number1 = 10;
const number2 = 5;

const maxNumber = getMax(number1, number2);
console.log('Max Number:', maxNumber);

const isEvenNumber = isEven(number1);
console.log('Is Even:', isEvenNumber);