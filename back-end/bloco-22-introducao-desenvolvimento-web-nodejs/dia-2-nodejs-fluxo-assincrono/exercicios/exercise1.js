// Crie uma função que recebe três parâmetros e retorna uma Promise .
// Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
// Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
// Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

const expression = (number1, number2, number3) => {
  return new Promise((resolve, reject) => {
    const isNotNumber = (value) => typeof value !== 'number';
    if ([number1, number2, number3].some(isNotNumber)) reject('Ops! Use apenas números.');

    const result = (number1 + number2) * number3;
    if (result < 50) reject('Ops! Valor muito baixo.');

    resolve(result);
  });
};

module.exports = expression;

// expression(5, 'x', 3)
//   .then((resolve) => console.log(resolve))
//   .catch((err) => console.log(err));

// expression(5, 2, 3)
//   .then((resolve) => console.log(resolve))
//   .catch((err) => console.log(err));

// expression(10, 2, 5)
//   .then((resolve) => console.log(resolve))
//   .catch((err) => console.log(err));
