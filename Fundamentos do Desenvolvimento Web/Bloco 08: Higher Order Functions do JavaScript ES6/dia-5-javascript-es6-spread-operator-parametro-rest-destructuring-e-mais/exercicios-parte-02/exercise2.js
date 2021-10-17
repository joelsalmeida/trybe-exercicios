// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const sum = (...numbers) => numbers.reduce((n1, n2) => (n1 += n2));

console.log(sum(1, 2));

console.log(sum(1, 2, 3));

console.log(sum(1, 2, 3, 4));