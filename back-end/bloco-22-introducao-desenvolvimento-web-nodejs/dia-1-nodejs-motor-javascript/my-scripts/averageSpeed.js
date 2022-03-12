const readlineSync = require('readline-sync');

// Vamos criar mais um script. Dessa vez, para calcular a velocidade média de um carro numa corrida

const DISTANCE_IN_METERS = readlineSync.questionInt('Qual a distância percorrida em metros? ', {
  limitMessage: 'Ops, valor inválido.',
});

const SPEED_IN_SECONDS = readlineSync.questionInt('Qual o tempo gasto em segundos? ', {
  limitMessage: 'Ops, valor inválido.',
});

const averageSpeedInMs = () => DISTANCE_IN_METERS / SPEED_IN_SECONDS;
const msToKmh = (ms) => ms * 3.6;

console.log(`Velocidade média: ${msToKmh(averageSpeedInMs()).toFixed(2)} km/h.`);
