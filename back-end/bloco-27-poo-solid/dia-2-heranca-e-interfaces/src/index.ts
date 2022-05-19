import Airplane from './airplane';
import Person from './person';
import Student from './student';
import Car from './car';
import Pokemon, { PokeTypes } from './pokemon';

// PERSON
const john = new Person('John', new Date('1995/10/19'));
console.log(john);

// STUDENT
const mariaExamGrades = [9.5, 7, 8, 10];
const mariaWorkGrades = [8.5, 9];

const maria = new Student('Maria', new Date('1997/05/27'), mariaExamGrades, mariaWorkGrades);

console.log(maria);
console.log('Maria, media: ', maria.examGradesMedia());
console.log('Maria, total: ', maria.examGradesTotal());

// VEHICLES

const P51 = new Airplane('P-51 Mustang', true, 1);
const mustangGT = new Car('Mustang GT', false, 4);

console.log(P51);
console.log(mustangGT);

// POKEMON

const bulbasaur = new Pokemon('Bulbasaur', PokeTypes.plant, 700, 900);
console.log(bulbasaur);
