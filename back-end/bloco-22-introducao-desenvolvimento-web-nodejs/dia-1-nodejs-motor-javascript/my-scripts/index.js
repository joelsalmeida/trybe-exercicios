const readlineSync = require('readline-sync');

readlineSync.setDefaultOptions({ limit: ['averageSpeed', 'guessingGame', 'imc'] });

const SCRIPT = readlineSync.question(
  'Deseja iniciar com qual script? averageSpeed, guessingGame, imc: ',
  {limitMessage: 'Ops, valor inválido. Escolha entre: averageSpeed, guessingGame e imc.'},
);

require(`./${SCRIPT}`);
