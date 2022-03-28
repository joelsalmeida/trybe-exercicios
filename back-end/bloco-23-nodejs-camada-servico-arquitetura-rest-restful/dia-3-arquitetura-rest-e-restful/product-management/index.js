const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const productController = require('./controllers/productController');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/products', productController);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log('App listening on port 3000!');
});
