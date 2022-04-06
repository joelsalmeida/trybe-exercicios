const express = require('express');
require('dotenv').config();
const { errorHandler } = require('./middlewares/errorHandler');

const { validateLogin } = require('./middlewares/validateLogin');
const { loginController } = require('./controllers/loginController');

const app = express();

app.use(express.json());
app.use(validateLogin);

app.post('/login', loginController);

app.use(errorHandler);

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
