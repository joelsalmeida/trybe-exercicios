// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N!,
// é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva.

const factorial = (n) => (n > 0 ? n * factorial(n - 1) : 1);

// // (4) => 4 * (4 - 1 = 3) = 12 >> [3 é maior que 0]
// //                    (3 - 1 = 2) => 2 * (12) = 24 >> [2 é maior que 0]
// //                            (2 - 1 = 1) 1 * 24 = 24 >> [1 é maior que 0]
// //                                     (1 - 1 = 0) [ 0 não é maior que 0] retorna 1
// //                                                                          (1) * 24 = 24 :)

console.log(factorial(4));

function factorialTwo(number) {
  if (number > 0) {
    console.log('number: ' + number);
    return number * factorialTwo(number - 1)
  } else {
    console.log("else return 1");
    return 1
  }
}

console.log(factorialTwo(4));
