// crie uma função que receba três parâmetros, sendo eles:
// um objeto, o nome de uma chave e o seu valor.
// O retorno dessa função deve ser o objeto já com a nova chave adicionada nele.

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

function chanceObject(object, newKey, newValue) {
  object[newKey] = newValue;
  return object;
}
console.log(chanceObject(customer, 'lastName', 'Farias'));

// Tente criar uma função que exiba as habilidades do objeto student.
// Cada habilidade deve ser exibida no formato:
// "Nome da habilidade, Nível: valor da chave referente à habilidade".

const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const skills = (studentObject) => {
  const skillsList = Object.keys(studentObject);
  skillsList.forEach((skill, index) => {
    console.log(`${skill}, nível: ${studentObject[skillsList[index]]}`);
  });
};
skills(student);
