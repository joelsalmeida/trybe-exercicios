const connection = require('./connection');

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
});

const withFullName = ({ id, firstName, middleName, lastName }) => {
  const fullName = [firstName, middleName, lastName].filter(Boolean).join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  };
};

const getAll = async () => {
  const [authors] = await connection.execute(
    `SELECT id, first_name, middle_name, last_name
     FROM model_example.authors;`
  );

  return authors.map(serialize).map(withFullName);
};

const getById = async (id) => {
  const [author] = await connection.execute(
    `SELECT * FROM model_example.authors WHERE id = ?;`,
    [id]
  );

  return author.map(serialize).map(withFullName);
};

module.exports = { getAll, getById };
