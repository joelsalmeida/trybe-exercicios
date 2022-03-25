const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'seu_usuário',
  password: 'sua_senha',
  database: 'model_example',
});

module.exports = connection;
