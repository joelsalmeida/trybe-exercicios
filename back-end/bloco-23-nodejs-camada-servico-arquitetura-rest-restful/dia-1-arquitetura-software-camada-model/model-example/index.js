const express = require('express');

const app = express();
const Author = require('./models/Author');

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();
  return res.status(200).json(authors);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
