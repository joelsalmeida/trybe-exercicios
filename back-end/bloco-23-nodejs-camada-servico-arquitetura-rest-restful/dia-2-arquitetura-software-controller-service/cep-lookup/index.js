require('dotenv').config();
const express = require('express');

const app = express();

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong!' });
});

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Ouvindo a porta: ${PORT}.`));
