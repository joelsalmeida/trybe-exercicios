import Movie from './Movie';
import Serie from './Serie';

const interstellar = new Movie('Interstellar', new Date('November 6, 2014'), 169);
console.log(interstellar);
console.log(interstellar.getResume());

const chernobyl = new Serie('Chernobyl', new Date('June 3, 2019'), 1, 5);
console.log(chernobyl);
console.log(chernobyl.getResume());
