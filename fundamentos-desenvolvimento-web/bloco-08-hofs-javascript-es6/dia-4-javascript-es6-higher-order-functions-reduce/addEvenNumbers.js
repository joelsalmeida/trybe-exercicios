// Faça uma função que some todos os números pares do array.

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// Função utilizada pelo .filter.
const filterEvens = (number) => number % 2 === 0;

// Função utilizada pelo .reduce.
const sumNumbers = (accumulator, current) => accumulator += current;

// Recebe o array e aplica filter e reduce.
const sumEvens = (numbers) => numbers.filter(filterEvens).reduce(sumNumbers);

console.log(sumEvens(numbers));