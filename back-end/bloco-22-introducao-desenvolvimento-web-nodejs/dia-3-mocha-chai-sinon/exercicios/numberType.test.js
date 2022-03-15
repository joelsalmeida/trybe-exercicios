const { expect } = require('chai');

// Estruture os testes utilizando mocha e chai para um função que irá dizer se um número é "positivo", "negativo" ou "neutro":
// Essa função irá receber um número como parâmetro e retornar uma string como resposta;
// Quando o número passado for maior que 0 deverá retornar "positivo", quando for menor que 0 deverá retornar "negativo"
// e quando igual a 0 deverá retornar "neutro";

const numberType = require('./numberType');

describe('Função: numberType', () => {
  it('Ao receber um número maior que "0", deve retornar "Positivo"', () => {
    expect(numberType(1)).to.be.equal('Positivo');
  });

  it('Ao receber um número menor que "0", deve retornar "Negativo"', () => {
    expect(numberType(-1)).to.be.equal('Negativo');
  });

  it('Ao receber um número igual a "0", deve retornar "Neutro"', () => {
    expect(numberType(0)).to.be.equal('Neutro');
  });
});
