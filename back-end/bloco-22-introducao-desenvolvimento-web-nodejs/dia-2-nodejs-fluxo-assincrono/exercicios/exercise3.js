// Reescreva o código do exercício anterior para que utilize async/await .

const expression = require('./exercise1');

const generateRandomNumber = () => Math.floor(Math.random() * 10 + 1);

const randomExpression = async () => {
  const number1 = generateRandomNumber();
  const number2 = generateRandomNumber();
  const number3 = generateRandomNumber();

  try {
    console.log(await expression(number1, number2, number3));
  } catch (error) {
    console.error(error);
  }
};

randomExpression();