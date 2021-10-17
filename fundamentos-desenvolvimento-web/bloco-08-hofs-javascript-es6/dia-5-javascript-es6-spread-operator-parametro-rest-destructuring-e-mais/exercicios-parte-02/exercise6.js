// 6 - Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue,
// cada carro é modelado como um array. Porém, essa modelagem está baixo nível.
// Cria uma função toObject que, dada uma lista, retorna um objeto representando o carro:

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

function toObject(car) {
  const [model, brand, year] = car;
  return { model, brand, year };
}

const newPalio = toObject(palio);

console.log(palio);
console.log(newPalio);
