// 1 - No código abaixo você tem a função getUser , que retorna uma pessoa qualquer.
// Complete a função getUser de forma que ela receba uma outra função como parâmetro
// para que possa realizar as operações abaixo sobre a pessoa retornada.

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = (callBack) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  return callBack(userToReturn);
};

// complete a chamada da função getUser de modo que o retorno seja:
// "Hello! My name is Ivan Ivanovich"
console.log(getUser(userFullName));

// complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian"
console.log(getUser(userNationality));