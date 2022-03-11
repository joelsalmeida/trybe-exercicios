// Crie um script para calcular o Índice de Massa Corporal(IMC) de uma pessoa.
// A fórmula para calcular o IMC é peso / altura ^ 2.
// Comece criando um novo pacote node com npm init e respondendo às perguntas do npm .
// Por enquanto, não se preocupe em pedir input da pessoa usuária. Utilize valores fixos para peso e altura .
// Armazene o script no arquivo imc.js .

const NAME = 'Jon';
const WEIGHT = 75;
const HEIGHT = 1.80;

const imc = () => (WEIGHT / Math.pow(HEIGHT, 2)).toFixed(2);

console.log(imc());
