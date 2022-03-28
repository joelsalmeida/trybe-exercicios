
const { getNewAuthor } = require('../services/serviceAuthor');
const connection = require('./connection');

const serialize = (authorData) =>
  authorData.map((item) =>
    getNewAuthor({
      id: item.id,
      firstName: item.first_name,
      middleName: item.middle_name,
      lastName: item.last_name,
    })
  );

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;'
  );
  return serialize(authors);
};

const findById = async (id) => {
  const query =
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?';

  const [authorData] = await connection.execute(query, [id]);

  if (authorData.length === 0) return null;

  return serialize(authorData)[0];
};

module.exports = {
  getAll,
  findById,
};
