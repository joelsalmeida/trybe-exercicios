const fs = require('fs');

const txtFile = './io-local/meu-arquivo.txt';

try {
  const data = fs.readFileSync(txtFile, 'utf8');
  console.log(data);
} catch (err) {
  console.error(`Erro ao ler o arquivo: ${err.path}`);
  console.log(err);
}