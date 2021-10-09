// 4 - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna
// todas as pessoas australianas que nasceram no século 20:

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo

function filterPeople(peopleList, nationalityCountry, fromYear, toYear) {
  return peopleList.filter(
    ({ nationality, bornIn }) =>
      nationality.toLowerCase() === nationalityCountry.toLowerCase() &&
      bornIn > fromYear &&
      bornIn < toYear
  );
}

console.log(filterPeople(people, 'australian', 1900, 2000));
