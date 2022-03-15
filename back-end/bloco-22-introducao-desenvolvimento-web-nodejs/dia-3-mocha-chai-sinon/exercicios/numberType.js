const numberType = (value) => {
  if (value === 0) return 'Neutro';
  if (value > 0) return 'Positivo';
  return 'Negativo';
};

module.exports = numberType;
