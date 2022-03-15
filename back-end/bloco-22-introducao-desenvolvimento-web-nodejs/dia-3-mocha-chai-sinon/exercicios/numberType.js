const numberType = (value) => {
  if (value === undefined) throw new Error('Ops, esqueceu o parâmetro?');
  if (typeof value !== 'number') throw new Error('O valor deve ser um número');

  if (value === 0) return 'Neutro';
  if (value > 0) return 'Positivo';
  return 'Negativo';
};

module.exports = numberType;
