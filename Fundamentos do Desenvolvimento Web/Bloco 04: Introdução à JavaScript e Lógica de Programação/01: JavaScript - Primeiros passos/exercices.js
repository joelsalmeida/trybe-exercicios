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
  console.log(result + " is bigger.");
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
  console.log(result + " is bigger3.");
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
    result = "positive.";
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
      validAngle = "valid";
    }
    console.log(thisAngle + " is " + validAngle + ".");
  }

  switch (totalAngle) {
    case 180:
      result = "it's a triangle.";
      break;

    default:
      result = "it's not a triangle.";
      break;
  }
  console.log(result);
}
aTriangle(-30, 140, 10);

// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
function chessMovements(piece) {
  let king =
    "The King may move one square in any direction, so long as no piece is blocking his path.";

  let queen =
    "The Queen may move any number of squares straight or diagonally in any direction.";

  let rook =
    "The Rook may move in a straight line, any number of squares horizontally or vertically.";

  let bishop = "The Bishop may move any number of squares diagonally.";

  let knight =
    "The only piece that can jump over a piece - be it your own, or the opponent’s - is the: Knight.";

  let pawn =
    "The Pawn on its first move may move either one or two squares straight forward.";

  let pieceStandardized = piece.toLowerCase();

  switch (pieceStandardized) {
    case "king":
      console.log(king);
      break;

    case "queen":
      console.log(queen);
      break;

    case "rook":
      console.log(rook);
      break;

    case "bishop":
      console.log(bishop);
      break;

    case "knight":
      console.log(knight);
      break;

    case "pawn":
      console.log(pawn);
      break;
    default:
      console.log("Ops. Does this piece exist?");
      break;
  }
}
chessMovements("PAWN");

// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100)em conceitos de A a F.
// Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
function yourGrade(g) {
  let gradeFeedback;

  if (g < 0 || g > 100) {
    gradeFeedback = "Ops, something wrong.";
  } else if (g >= 90) {
    gradeFeedback = "A. You were amazing!";
  } else if (g >= 80) {
    gradeFeedback = "B. You did a great job!";
  } else if (g >= 70) {
    gradeFeedback = "C. Good work!";
  } else if (g >= 60) {
    gradeFeedback = "D. Nemo said - keep swimming...";
  } else if (g >= 50) {
    gradeFeedback = "E. You can improve.";
  } else if (g < 50) {
    gradeFeedback = "F. :(";
  }
  console.log(gradeFeedback);
}
yourGrade(-1);

// Escreva um programa que defina três números em constantes
// e retorne true se pelo menos uma das três for par.
// Caso contrário, ele retorna false .
function isEven(n1, n2, n3) {
  let result;
  if (n1 % 2 === 0 || n2 % 2 === 0 || n3 % 2 === 0) {
    result = true;
  } else {
    result = false;
  }
  console.log("Is there any even number? " + result);
}
isEven(3, 2, 7);

// Escreva um programa que se inicie com dois valores em duas constantes diferentes:
// O custo de um produto e seu valor de venda.
// A partir dos valores, calcule quanto de lucro a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar
// caso algum dos seus valores de entrada seja menor que zero.
function checkValues(cost, salesValue, tax) {
  let allValues = [cost, salesValue, tax];

  allValues.forEach((element) => {
    if (element < 0) {
      console.log(element + " is a invalid value.");
    } else {
      console.log(element + " is a valid value.");
    }
  });
}

function profitResult(costPr, salesValuePr, taxPr) {
  let taxValue = (costPr / 100) * taxPr;
  console.log("The tax value is: " + taxValue);

  let totalCost = costPr + taxValue;
  console.log("The total cost is: " + totalCost);

  let profit = salesValuePr - totalCost;

  if (profit < 0) {
    console.log("Looks like we have a loss of " + profit);
  } else if (profit === 0) {
    console.log("No profit. This seems like a waste of time and energy.");
  } else {
    console.log(
      "Considering the tax of " + taxPr + " your profit is " + profit + "."
    );
    let profitPer1k = profit * 1000;
    console.log("By selling 1000 pieces, the profit will be " + profitPer1k);
  }
}

function profitCalculation(cost, salesValue, tax) {
  if (cost < 0 || salesValue < 0 || tax < 0) {
    console.log("Ops. Something wrong. :(");
    checkValues(cost, salesValue, tax);
  } else {
    profitResult(cost, salesValue, tax);
  }
}
profitCalculation(-100, 185, 20);

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.
// Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10.
// Para as faixas de impostos, use as seguintes referências:

// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

function percent(value, perCentToGet) {
  let result = (value / 100) * perCentToGet;
  return result;
}

function getSocialSecurityTax(gs) {
  let taxA = percent(gs, 8);
  let taxB = percent(gs, 9);
  let taxC = percent(gs, 11);
  let taxD = 570.88;

  if (gs <= 1556.94) {
    socialSecurityTax = taxA.toFixed(2);
  } else if (gs >= 1556.95 && gs <= 2594.92) {
    socialSecurityTax = taxB.toFixed(2);
  } else if (gs >= 2594.93 && gs <= 5198.82) {
    socialSecurityTax = taxC.toFixed(2);
  } else {
    socialSecurityTax = taxD;
  }
  return socialSecurityTax;
}

function getIncomeTax(gs) {
  let taxA = 0;
  let taxB = percent(baseSalary, 7.5) - 142.8;
  let taxC = percent(baseSalary, 15) - 354.8;
  let taxD = percent(baseSalary, 22.5) - 636.13;
  let taxE = percent(baseSalary, 27.5) - 869.36;

  if (baseSalary <= 1903.98) {
    incomeTax = taxA;
  } else if (baseSalary >= 1903.99 && baseSalary <= 2826.65) {
    incomeTax = taxB;
  } else if (baseSalary >= 2826.66 && baseSalary <= 3751.05) {
    incomeTax = taxC;
  } else if (baseSalary >= 3751.06 && baseSalary <= 4664.68) {
    incomeTax = taxD;
  } else if (baseSalary > 4664.68) {
    incomeTax = taxE;
  }
  return incomeTax;
}

let baseSalary;
function getNetSalary(grossSalary) {
  let socialSecurityTax;
  let incomeTax;
  let netSalary;

  socialSecurityTax = getSocialSecurityTax(grossSalary);
  baseSalary = grossSalary - socialSecurityTax;
  incomeTax = getIncomeTax(grossSalary);
  netSalary = baseSalary - incomeTax;

  return netSalary;
}
getNetSalary(3000.0);
