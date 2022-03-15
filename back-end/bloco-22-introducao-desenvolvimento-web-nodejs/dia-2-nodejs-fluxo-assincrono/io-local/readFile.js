const fs = require('fs');

const txtFile = './io-local/meu-arquivo.txt';

fs.readFile(txtFile, 'utf8', (err, data) => {
  if (err) {
    console.error(`Não foi possível ler o arquivo ${txtFile}\n Erro: ${err}`);
    process.exit(1);
  }
  console.log(`Conteúdo do arquivo: ${data}`);
});