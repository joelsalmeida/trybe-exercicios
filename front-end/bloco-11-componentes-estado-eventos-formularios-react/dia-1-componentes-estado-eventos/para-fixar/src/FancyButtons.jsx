import React from 'react';

// 1 - Crie uma aplicação React com npx create-react-app fancy-buttons.
// Altere o componente App.js para que seja um componente de classe e contenha um botão associado a um evento
// que imprime um texto qualquer via console.log() . Não precisa se preocupar com a sintaxe correta
// para funções de eventos por enquanto.

// 2 - Faça com que sua aplicação exiba três botões lado a lado com textos diferentes.
// Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente
// no console do navegador via console.log() .

const funcOne = () => console.log('Primeiro botão');
const funcTwo = () => console.log('Segundo botão');
const funcThree = () => console.log('Terceiro botão');

class FancyButtons extends React.Component {
  render() {
    return (
      <div className="buttons-container">
        <button className="button-one" onClick={funcOne}>
          Button One
        </button>

        <button className="button-two" onClick={funcTwo}>
          Button Two
        </button>

        <button className="button-three" onClick={funcThree}>
          Button Three
        </button>
      </div>
    );
  }
}

export default FancyButtons;
