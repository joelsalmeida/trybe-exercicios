# JavaScript ES6 - Higher Order Functions - forEach, find, some, every, sort

Nos exercícios a seguir, você trabalhará com uma estrutura de dados representando uma lista de livros, contendo informações como nome do livro, gênero, pessoa autora do livro e data de lançamento.

Em cada exercício, será pedido que você encontre ou produza alguma informação a respeito dessa lista utilizando as funções que você aprendeu hoje. Todos os exercícios contêm um código base. Você deverá copiar esse código e salvá-lo em um arquivo nomeado conforme o número do exercício, completando a função em branco.

Por exemplo, o exercício 1 deve ser salvo no arquivo `exercise1.js` , e assim por diante. Em cada exercício existe uma ou mais chamadas de funções do módulo [assert](https://www.w3schools.com/nodejs/ref_assert.asp) . Essas funções checarão automaticamente se seu código retorna o resultado esperado.

Sua solução só será considerada correta se **todos** os _asserts_ do arquivo forem executados sem erros. No _Visual Studio Code_ , você pode executar o código do exemplo _clickando_ com o botão direito e escolhendo a opção `Run Code` .

Quando todos os _asserts_ passam, isto é, nenhum deles encontra um resultado diferente do esperado, nada de diferente do normal é reportado:

```javascript
const assert = require('assert');

function funcaoQualquer() {
  return 'valor1';
}

assert.strictEqual(funcaoQualquer(), 'valor1');
```

```sh
[Running] node "/Users/leandro/example.js"

[Done] exited with code=0 in 0.087 seconds
```

Quando algum _assert_ falha, é exibida, entre outras coisas, a linha onde o erro aconteceu e sua causa:

```javascript
const assert = require('assert');

function funcaoQualquer() {
  return 'valor1';
}

assert.strictEqual(funcaoQualquer(), 'valor2');
```

```sh
[Running] node "/Users/leandro/example.js"
assert.js:92
  throw new AssertionError(obj);
  ^

AssertionError [ERR_ASSERTION]: 'valor1' == 'valor2'
    at Object.<anonymous> (/Users/leandro/example.js:7:8)
    at Module._compile (internal/modules/cjs/loader.js:956:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:973:10)
    at Module.load (internal/modules/cjs/loader.js:812:32)
    at Function.Module._load (internal/modules/cjs/loader.js:724:14)
    at Function.Module.runMain (internal/modules/cjs/loader.js:1025:10)
    at internal/main/run_main_module.js:17:11 {
  generatedMessage: true,
  code: 'ERR_ASSERTION',
  actual: 'valor1',
  expected: 'valor2',
  operator: '=='
}

[Done] exited with code=1 in 0.075 seconds
```

Atente para a linha que diz por que a execução falhou: `AssertionError [ERR_ASSERTION]: 'valor1' == 'valor2'` . Isso significa que o resultado da função `funcaoQualquer,` `valor1` , é diferente do esperado, `valor2` .

----------

Estes exercícios praticam os conceitos de _Higher Order Functions_ associados a outros já vistos, como _arrow functions_ , _template literals_ , _objetos_ e temas dos fundamentos. Essa mistura de conceitos é muito importante para seu aprendizado, então use tudo o que sabe para resolver os exercícios!

**Utilize seguinte código como template para realizar os exercícios:**

```javascript
const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
```

---

**1 -** Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

- Dica: use a função `find` .

```javascript
function authorBornIn1947() {
  // escreva aqui o seu código
}

assert.strictEqual(authorBornIn1947(), 'Stephen King');
```

---

**2 -** Retorne o nome do livro de menor nome.

- Dica: use a função `forEach` .

```javascript
function smallerName() {
  let nameBook;
  // escreva aqui o seu código

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

assert.strictEqual(smallerName(), 'Duna');
```

---

**3 -** Encontre o primeiro livro cujo nome possui 26 caracteres.

```javascript
const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  // escreva seu código aqui
}

assert.deepStrictEqual(getNamedBook(), expectedResult);
```

---

**4 -** Ordene os livros por data de lançamento em ordem decrescente.

```javascript
const expectedResult = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
}

assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult);
```

---

**5 -** Faça uma função que retorne `true` , se todas as pessoas autoras nasceram no século XX, ou `false` , caso contrário.

```javascript
const expectedResult = false;

function everyoneWasBornOnSecXX() {
  // escreva seu código aqui
}

assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult);
```

---

**6 -** Faça uma função que retorne `true` , se algum livro foi lançado na década de 80, e `false` , caso contrário.

```javascript
const expectedResult = true;

function someBookWasReleaseOnThe80s() {
  // escreva seu código aqui
}

assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult);
```

---

**7 -** Faça uma função que retorne `true` , caso nenhum author tenha nascido no mesmo ano, e `false` , caso contrário.

```javascript
const expectedResult = false;

function authorUnique() {
  // escreva seu código aqui
}

assert.strictEqual(authorUnique(), expectedResult);
```
