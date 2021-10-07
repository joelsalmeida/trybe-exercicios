// Neste exemplo, serão comparados valores para buscar o maior valor em um array.
// Tente criar essa função apenas com for e depois tente com reduce.

const numbers = [50, 85, -30, 3, 15];

function forGetBigger(numbers) {
  let theBigger = 0;

  for (let index = 0; index < numbers.length; index++) {
    const currentNumber = numbers[index];
    if (currentNumber > theBigger) theBigger = currentNumber;
  }

  return theBigger;
}

console.log('forGetBigger: ' + forGetBigger(numbers));

const reduceGetBigger = (accumulator, currentValue) =>
  currentValue > accumulator ? currentValue : accumulator;
  
const theBigger = numbers.reduce(reduceGetBigger, 0);

console.log('reduceGetBigger: ' + theBigger);
