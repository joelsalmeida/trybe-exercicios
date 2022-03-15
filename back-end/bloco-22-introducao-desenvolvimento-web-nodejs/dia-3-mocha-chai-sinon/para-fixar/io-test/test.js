const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const readFileContent = require('./readFileContent');
const FILE_CONTENT = 'VQV com TDD';

describe('Função readFile', () => {
  describe('Se o arquivo existir', () => {
    sinon.stub(fs, 'readFileSync').returns(FILE_CONTENT);
    after(() => fs.readFileSync.restore());

    describe('O retorno', () => {
      const result = readFileContent('textFile.txt');

      it('é uma string', () => {
        expect(result).to.be.a('string');
      });

      it('é igual ao conteúdo do arquivo', () => {
        expect(result).to.be.equals(FILE_CONTENT);
      });
    });
  });

  describe('Se o arquivo não existir', () => {
    it('Deve retornar "null"', () => {
      const result = readFileContent('dontExist.txt');
      expect(result).to.be.equal(null);
    });
  });
});
