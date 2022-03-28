const rescue = require('express-rescue');
const cepService = require('../services/cepService');

const getAddressByCep = rescue(async (req, res) => {
  const { cep } = req.params;
  const address = await cepService.getAddressByCep(cep);

  if (address.error) return res.status(400).json(address.error);
  return res.status(200).json(address);
});

module.exports = { getAddressByCep };
