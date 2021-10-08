// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function countA(acc, curr) {
  for (const letter of curr) {
    if (letter === 'A' || letter === 'a') acc += 1;
  }
  return acc;
}

function containsA(nameList) {
  return nameList.reduce(countA, 0);
}

console.log(containsA(names));
