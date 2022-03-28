const connection = require('./connection');

const getAddressByCep = async (cep) => {
  const query = `SELECT * FROM cep_lookup.ceps WHERE cep = ?`;
  const [address] = await connection.execute(query, [cep]);
  
  if (address.length === 0) return null;
  return address;
};

module.exports = { getAddressByCep };
