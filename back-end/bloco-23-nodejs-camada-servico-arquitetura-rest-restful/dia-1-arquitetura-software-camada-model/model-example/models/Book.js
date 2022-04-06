const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute(`SELECT * FROM model_example.books;`);
  return books;
};

const getByAuthorId = async (id) => {
  const [books] = await connection.execute(
    `SELECT * FROM model_example.books AS b
     JOIN model_example.authors AS a
     ON b.author_id = a.id
     WHERE a.id = ?;`,
    [id]
  );
  return books;
};

module.exports = { getAll, getByAuthorId };
