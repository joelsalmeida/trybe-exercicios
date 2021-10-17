// Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer,
// seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

function makeSquare(squareSize) {
    for (let index = 0; index < squareSize; index++) {
        let line = "";
        for (let index = 0; index < squareSize; index++) {
            line += "*"
        }
        console.log(line);
    }
}
makeSquare(5);

// Para o segundo exercício, faça o mesmo que antes,
// mas que imprima um triângulo retângulo com 5 asteriscos de base.

function makeTriangle(triangleBase) {
    for (let star = "*"; star.length <= triangleBase; star += "*") {
        console.log(star);
    }
}
makeTriangle(5);

// Agora inverta o lado do triângulo.

function makeInverseTriangle(triangleReverseBase) {
    let spaces = "";
    for (let index = 0; index < triangleReverseBase; index++) {
        spaces += " "
    }

    let star = "*";
    for (let index = 0; index < triangleReverseBase; index++, star += "*") {
        spaces = spaces.slice(0, -1)
        console.log(spaces + star);
    }

}
makeInverseTriangle(5)


// Faça uma pirâmide com n asteriscos de base.

function makePyramid(pyramidBase) {
    let spaces = "";
    for (let index = 0; index < (pyramidBase - 1) / 2; index++) {
        spaces += " ";
    }

    for (let star = "*"; star.length <= pyramidBase; star += "**", spaces = spaces.slice(0, -1)) {
        console.log(spaces + star);
    }
}
makePyramid(5);