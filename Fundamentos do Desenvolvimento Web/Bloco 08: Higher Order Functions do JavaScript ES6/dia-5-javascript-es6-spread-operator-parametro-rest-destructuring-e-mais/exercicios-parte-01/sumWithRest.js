const sumWithRest = (...numbers) => numbers.reduce((acc, curr) => acc += curr);

console.log(sumWithRest(1, 2, 3, 4, 5));

console.log(sumWithRest(1, 2, 3));

console.log(sumWithRest(1, 2));