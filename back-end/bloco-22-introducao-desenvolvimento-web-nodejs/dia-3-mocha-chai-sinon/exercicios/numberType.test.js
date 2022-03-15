const { expect } = require('chai');

// Adicione à função um tratamento para casos em que o parâmetro informado não seja do tipo Number .

const numberType = require('./numberType');

describe('Função: numberType', () => {
  it('Caso não receba um parâmetro, deve disparar um erro', () => {
    expect(() => numberType()).to.throw();
  });

  it('Caso não receba um parâmetro, a mensagem de erro deve ser: Ops, esqueceu o parâmetro?', () => {
    expect(() => numberType()).to.throw('Ops, esqueceu o parâmetro?');
  });

  it('Ao receber um parâmetro que não seja um número, deve disparar um erro', () => {
    expect(() => numberType('1')).to.throw();
  });

  it('Ao receber um parâmetro que não seja um número, a mensagem de erro deve ser: O valor deve ser um número', () => {
    expect(() => numberType('1')).to.throw('O valor deve ser um número');
  });

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
