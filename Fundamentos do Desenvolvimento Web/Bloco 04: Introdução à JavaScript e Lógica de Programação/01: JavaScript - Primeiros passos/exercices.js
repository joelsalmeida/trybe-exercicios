// Faça cinco programas, um para cada operação aritmética básica.
// Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados.
// Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

function sum(n1, n2) {
    let result = n1 + n2;
    console.log("sum: " + result);
}
sum(5, 5);

function subtraction(n1, n2) {
    let result = n1 - n2;
    console.log("subtraction: " + result);
}
subtraction(10, 3);

function multiplication(n1, n2) {
    let result = n1 * n2;
    console.log("multiplication: " + result);
}
multiplication(10, 3);

function division(n1, n2) {
    let result = n1 / n2;
    console.log("division: " + result);
}
division(10, 3);

function remainder(n1, n2) {
    let result = n1 % n2;
    console.log("remainder: " + result);
}
remainder(7, 3);

// Faça um programa que retorne o maior de dois números. 
// Defina no começo do programa duas constantes com os valores que serão comparados.

function whoIsBigger(n1, n2) {
    let result;

    if (n1 > n2) {
        result = n1;
    } else {
        result = n2;
    }
    console.log(result + " is bigger.")
}
whoIsBigger(5, 3);

// Faça um programa que retorne o maior de três números.
// Defina no começo do programa três constantes com os valores que serão comparados.

function whoIsBigger3(n1, n2, n3) {
    let result;

    if (n1 > n2 && n1 > n3) {
        result = n1;
    } else if (n2 > n1 && n2 > n3) {
        result = n2;
    } else result = n3;
    console.log(result + " is bigger3.")
}
whoIsBigger3(5, 4, 3);

// Faça um programa que, dado um valor definido numa constante,
// retorne "positive" se esse valor for positivo,
// "negative" se for negativo e "zero" caso contrário.

function positiveOrNegative(number) {
    let result;
    if (number < 0) {
        result = "negative.";
    } else if (number === 0) {
        result = "zero.";
    } else {
        result = "positive."
    }
    console.log(result);
}
positiveOrNegative(-1);

// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo.
// Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário.
// Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

function aTriangle(a1, a2, a3) {

    let angles = [a1, a2, a3];
    let totalAngle = a1 + a2 + a3;
    let validAngle;
    let result;

    for (let index = 0; index < angles.length; index++) {
        let thisAngle = angles[index];

        if (thisAngle < 0) {
            validAngle = "invalid";
        } else {
            validAngle = "valid"
        }
        console.log(thisAngle + " is " + validAngle + ".")
    }

    switch (totalAngle) {
        case 180:
            result = "it's a triangle."
            break;

        default:
            result = "it's not a triangle."
            break;
    }
    console.log(result);
}
aTriangle(-30, 140, 10);

// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

function chessMovements(piece) {
    let king = "The King may move one square in any direction, so long as no piece is blocking his path.";

    let queen = "The Queen may move any number of squares straight or diagonally in any direction.";

    let rook = "The Rook may move in a straight line, any number of squares horizontally or vertically.";

    let bishop = "The Bishop may move any number of squares diagonally.";

    let knight = "The only piece that can jump over a piece - be it your own, or the opponent’s - is the: Knight.";

    let pawn = "The Pawn on its first move may move either one or two squares straight forward.";

    let pieceStandardized = piece.toLowerCase();

    switch (pieceStandardized) {
        case "king":
            console.log(king)
            break;

        case "queen":
            console.log(queen)
            break;

        case "rook":
            console.log(rook)
            break;

        case "bishop":
            console.log(bishop)
            break;

        case "knight":
            console.log(knight)
            break;

        case "pawn":
            console.log(pawn)
            break;
        default:
            console.log("Ops. Does this piece exist?")
            break;
    }
}

chessMovements("PAWN");