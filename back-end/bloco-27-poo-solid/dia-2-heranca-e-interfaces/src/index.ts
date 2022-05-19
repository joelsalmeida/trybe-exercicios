import Person from './person';
import Student from './student';

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
