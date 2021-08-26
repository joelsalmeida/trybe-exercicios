// Obtenha o valor "Serviços" do array menu :

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
console.log("index 1 of menu: " + menuServices);

// Procure o índice do valor "Portfólio" do array menu :

let indexOfPortfolio = menu.indexOf("Portfólio");
console.log("index of portfólio: " + indexOfPortfolio);

// Adicione o valor "Contato" no final do array menu :

menu.push("Contato");
console.log("menu: " + menu);

// Utilize o for para imprimir os elementos da lista groceryList com o console.log() :

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index++) {
    console.log("grocery item: " + groceryList[index]);
}

// Utilize o for/of para imprimir os elementos da lista names com o console.log() :

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (const iterator of names) {
    console.log("name: " + iterator);
}

// Exercícios parte II
// Nesse primeiro exercício, percorra o array
// imprimindo todos os valores nele contidos com a função console.log()

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (const iterator of numbers) {
    console.log("number: " + iterator);
}

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let totalOfNumbers = 0;

for (const iterator of numbers) {
    totalOfNumbers += iterator;
}
console.log("total: " + totalOfNumbers);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let media = totalOfNumbers / numbers.length;
console.log("media of numbers: " + media);

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20,
// imprima a mensagem: "valor maior que 20".
// Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let greaterThan20;

if (media > 20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor ou igual a 20");
}

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let higherNumber = 0;

for (let index = 0; index < numbers.length; index++) {
    let currentNumber = numbers[index];
    
    if (currentNumber > higherNumber) {
        higherNumber = currentNumber;
    }
}

console.log("o maior número é: " + higherNumber);

// Descubra quantos valores ímpares existem no array e imprima o resultado.
// Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

function checkOddNumbers(n) {
    let oddNumbers = [];

    for (const iterator of n) {
        if (iterator % 2 != 0) {
            oddNumbers.push(iterator);
        }
    }

    if (oddNumbers.length <= 0) {
        console.log("nenhum valor ímpar encontrado.");
    } else {
        console.log( "there are " + oddNumbers.length + " odd numbers. " + oddNumbers);
    }
}
let numbers2 = [2, 4, 6, 8, 10]
checkOddNumbers(numbers);

