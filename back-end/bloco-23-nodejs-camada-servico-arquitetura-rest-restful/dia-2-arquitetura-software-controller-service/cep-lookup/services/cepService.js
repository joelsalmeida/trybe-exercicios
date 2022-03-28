const cepModel = require('../models/cepModel');

const getAddressByCep = async (cep) => {
  const address = await cepModel.getAddressByCep(cep);
 
  if (!address) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado',
      },
    };
  }

  return address;
};

module.exports = { getAddressByCep };
