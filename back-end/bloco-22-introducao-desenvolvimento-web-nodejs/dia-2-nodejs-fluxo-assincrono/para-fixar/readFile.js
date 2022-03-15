const fs = require('fs');

const readFile = (fileName) => {
  return new Promise((resolve, rejects) => {
    fs.readFile(fileName, (err, data) => {
      if (err) return rejects(err);
      resolve(data);
    });
  });
};

readFile('./para-fixar/text.txt')
  .then((data) => console.log(`Lido com sucesso. ${data.byteLength} bytes.`))
  .catch((err) => console.log(`Erro: ${err.message}.`));
