const express = require('express');

const app = express();
app.use(express.json());

const Author = require('./models/Author');
const Book = require('./models/Book');

app.post('/author', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Author.create(first_name, middle_name, last_name);
  return res.status(201).json({ message: 'Autor criado com sucesso!' });
});

app.get('/author/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.getById(id);
  return res.status(200).json(author);
});

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();
  return res.status(200).json(authors);
});

app.get('/books/author/:id', async (req, res) => {
  const { id } = req.params;
  const books = await Book.getByAuthorId(id);
  return res.status(200).json(books);
});

app.get('/books', async (_req, res) => {
  const books = await Book.getAll();
  return res.status(200).json(books);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
