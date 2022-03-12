const readlineSync = require('readline-sync');

const generateRandomNumber = () => Math.floor(Math.random() * 3 + 1);

const gameResult = (choice) => {
  const randomNumber = generateRandomNumber();
  if (choice !== randomNumber) return `Opa, não foi dessa vez. O número era ${randomNumber}.`;
  return 'Parabéns, número correto!';
};

const guessingGame = () => {
  const choice = readlineSync.questionInt('Escolha um número de 1 a 3: ', {
    limitMessage: 'Ops, valor inválido.',
  });

  console.log(gameResult(choice));

  if (readlineSync.keyInYN('Jogar novamente?')) return guessingGame();
  console.log('OK, até a próxima!');
};

guessingGame();
