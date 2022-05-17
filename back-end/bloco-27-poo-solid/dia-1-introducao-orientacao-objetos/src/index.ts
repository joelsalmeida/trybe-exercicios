import Student from './student';

const john = new Student('John', 951, [7, 8, 6.5, 9], [9, 7.8]);

console.log(john);
console.log(john.examGradesMedia());
console.log(john.examGradesTotal());
