import React from 'react';

// 1 - Crie uma aplicação React com npx create-react-app fancy-buttons.
// Altere o componente App.js para que seja um componente de classe e contenha um botão associado a um evento
// que imprime um texto qualquer via console.log() . Não precisa se preocupar com a sintaxe correta
// para funções de eventos por enquanto.

// 2 - Faça com que sua aplicação exiba três botões lado a lado com textos diferentes.
// Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente
// no console do navegador via console.log() .

// 3 - Declare dentro da classe do seu componente dos exercícios de fixação acima a função
// que lida com o evento que antes era lidado por uma função do lado de fora da classe!

// 4 - Garanta acesso ao objeto this na função que você declarou.

class FancyButtons extends React.Component {
  constructor() {
    super();
    this.funcOne = this.funcOne.bind(this);
    this.funcTwo = this.funcTwo.bind(this);
    this.funcThree = this.funcThree.bind(this);
  }

  funcOne = () => console.log('Primeiro botão');
  funcTwo = () => console.log('Segundo botão');
  funcThree = () => console.log('Terceiro botão');

  render() {
    return (
      <div className="buttons-container">
        <button className="button-one" onClick={this.funcOne}>
          Button One
        </button>

        <button className="button-two" onClick={this.funcTwo}>
          Button Two
        </button>

        <button className="button-three" onClick={this.funcThree}>
          Button Three
        </button>
      </div>
    );
  }
}

export default FancyButtons;
