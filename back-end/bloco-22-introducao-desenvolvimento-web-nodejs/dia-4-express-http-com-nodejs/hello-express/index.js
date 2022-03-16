const express = require('express');

const handleHelloWorldRequest = (req, res) => {
  res.status(200).send('Hello World');
};

const app = express();
app.get('/hello', handleHelloWorldRequest);

app.listen(3001, () => {
  console.log('Aplicação ouvindo a porta 3001');
});
