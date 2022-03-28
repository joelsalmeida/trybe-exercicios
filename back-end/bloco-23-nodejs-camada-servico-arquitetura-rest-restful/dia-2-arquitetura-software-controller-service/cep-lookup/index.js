require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());

const { getAddressByCep } = require('./controller/cepController');

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong!' });
});

app.get('/cep/:cep', getAddressByCep);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Ouvindo a porta: ${PORT}.`));
