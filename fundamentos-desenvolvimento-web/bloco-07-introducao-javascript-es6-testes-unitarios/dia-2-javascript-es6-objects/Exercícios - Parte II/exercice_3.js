// Para os exercícios a seguir, use o seguinte código.

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2.
// Essa função deve possuir três parâmetros, sendo eles:
// o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const lessonModifier = (object, key, value) => (object[key] = value);
lessonModifier(lesson2, 'turno', 'noite');
console.log(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listObjectKeys = (object) => `Keys do objeto: ${Object.keys(object)}`;
console.log(listObjectKeys(lesson1));

// Crie uma função para mostrar o tamanho de um objeto.

const objectLength = (object) => `Tamanho do objeto: ${Object.keys(object).length}`;
console.log(objectLength(lesson1));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listObjectValues = (object) => `Valores do objeto: ${Object.values(object)}`;
console.log(listObjectValues(lesson1));

// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign.
// Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3.

// allLessons.lesson1 = Object.assign({}, lesson1);
// allLessons.lesson2 = Object.assign({}, lesson2);
// allLessons.lesson3 = Object.assign({}, lesson3);

// Obs.: Properties in the target object are overwritten by properties in the sources if they have the same key.
// Later sources' properties overwrite earlier ones.

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

function totalStudents() {
  const lessons = Object.keys(allLessons);
  let total = 0;

  lessons.forEach((lesson) => {
    const lessonStudents = allLessons[lesson].numeroEstudantes;
    total += lessonStudents;
  });
  return 'Total de estudantes: ' + total;
}
console.log(totalStudents());

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

function getValueByNumber(target, number) {
  const keys = Object.keys(target);
  return `Valor da chave ${number}: ${target[keys[number]]}`;
}
console.log(getValueByNumber(lesson1, 0));

// Crie uma função que verifique se o par (chave / valor) existe na função.
// Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

function verifyPair(objeto, key, value) {
  const checkThisKey = objeto[key] ? true : false;
  const checkValue = objeto[key] === value ? true : false;
  return checkThisKey === true && checkValue === true ? true : false;
}
console.log(verifyPair(lesson1, 'materia', 'Matemática'));
