const fs = require('fs');

const readFileContent = (fileName) => {
  try {
    const fileContent = fs.readFileSync(fileName, 'utf8');
    return fileContent;
  } catch (err) {
    return null;
  }
};

module.exports = readFileContent;
