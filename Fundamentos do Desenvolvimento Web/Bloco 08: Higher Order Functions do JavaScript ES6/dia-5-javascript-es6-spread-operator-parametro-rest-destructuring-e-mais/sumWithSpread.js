const sumWithSpread = (...numbers) => numbers.reduce((acc, curr) => acc += curr);

console.log(sumWithSpread(1, 2, 3, 4, 5));

console.log(sumWithSpread(1, 2, 3));

console.log(sumWithSpread(1, 2));