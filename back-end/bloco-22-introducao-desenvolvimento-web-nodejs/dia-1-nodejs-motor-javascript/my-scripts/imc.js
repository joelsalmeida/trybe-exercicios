const readlineSync = require('readline-sync');

// Vamos sofisticar um pouco mais nosso script.
// Além de imprimir o IMC na tela, imprima também em qual categoria de IMC a pessoa se enquadra.

const NAME = readlineSync.question('Qual o seu nome? ');

const WEIGHT = readlineSync.questionInt('Qual o seu peso? ', {
  limitMessage: 'Ops, valor inválido. Se seu peso é 75kg, tente 75.',
});

const HEIGHT = readlineSync.questionFloat('Qual a sua altura? ', {
  limitMessage: 'Ops, valor inválido. Se sua altura é 1,80m, tente 1.80.',
});

const imc = () => (WEIGHT / Math.pow(HEIGHT, 2)).toFixed(2);

const result = (imc) => {
  if (imc < 18.5) return 'Categoria: Abaixo do peso (magreza).';
  if (imc > 40.0) return 'Categoria: Obesidade graus III e IV.';
  if (imc > 35.0) return 'Categoria: Obesidade grau II.';
  if (imc > 30.0) return 'Categoria: Obesidade grau I.';
  if (imc > 25.0) return 'Categoria: Acima do peso (sobrepeso).';
  return 'Categoria: Peso normal.';
}

console.log(`${NAME}, seu imc é ${imc()}.`);
console.log(result(imc()));
