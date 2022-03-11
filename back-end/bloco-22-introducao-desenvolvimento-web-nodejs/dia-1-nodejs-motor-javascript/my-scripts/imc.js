const readlineSync = require('readline-sync');

// Chegou a hora de tornar nosso script mais interativo! Vamos adicionar input de quem usa.

const NAME = readlineSync.question('Qual o seu nome?');

const WEIGHT = readlineSync.questionInt('Qual o seu peso? ', {
  limitMessage: 'Ops, valor inválido. Se seu peso é 75kg, tente 75.',
});

const HEIGHT = readlineSync.questionFloat('Qual a sua altura? ', {
  limitMessage: 'Ops, valor inválido. Se sua altura é 1,80m, tente 1.80.',
});

const imc = () => (WEIGHT / Math.pow(HEIGHT, 2)).toFixed(2);

console.log(`${NAME}, seu imc é ${imc()}.`);
