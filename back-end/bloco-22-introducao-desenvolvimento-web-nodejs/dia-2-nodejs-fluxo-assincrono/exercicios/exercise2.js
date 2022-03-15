// Escreva um código para consumir a função construída no exercício anterior.
// Gere um número aleatório de 1 a 10 para cada parâmetro que a função recebe.
// Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
// Utilize then e catch para manipular a Promise retornada pela função:
// Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
// Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.

const expression = require('./exercise1');

const generateRandomNumber = () => Math.floor(Math.random() * 10 + 1);

const randomExpression = async () => {
  const number1 = generateRandomNumber();
  const number2 = generateRandomNumber();
  const number3 = generateRandomNumber();

  expression(number1, number2, number3)
    .then((result) => console.log(result))
    .catch((err) => console.error(err));
};

randomExpression();
