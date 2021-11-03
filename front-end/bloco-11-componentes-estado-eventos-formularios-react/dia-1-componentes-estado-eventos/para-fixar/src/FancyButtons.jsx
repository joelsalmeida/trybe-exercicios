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

// 5 - Agora você vai converter sua aplicação para uma que conta o número de cliques dado em cada botão!
// Primeiramente, defina um estado inicial para a contagem de cada botão.

// 6 - Agora, quando um botão for clicado, altere de forma assíncrona o estado deste botão de zero para um.

// 7 - Por fim, baseie-se no estado anterior ao atual para incrementar a contagem de cliques cada vez que um botão for clicado!

class FancyButtons extends React.Component {
  constructor() {
    super();

    this.state = {
      one: 0,
      two: 0,
      three: 0,
    };

    this.funcOne = this.funcOne.bind(this);
    this.funcTwo = this.funcTwo.bind(this);
    this.funcThree = this.funcThree.bind(this);
  }

  funcOne = () => this.setState((state, _props) => ({ one: state.one + 1 }));
  funcTwo = () => this.setState((state, _props) => ({ two: state.two + 1 }));
  funcThree = () => this.setState((state, _props) => ({ three: state.three + 1 }));

  render() {
    return (
      <div className="buttons-container">
        <button className="button-one" onClick={this.funcOne}>
          A - Cliques: {this.state.one}
        </button>

        <button className="button-two" onClick={this.funcTwo}>
          B - Cliques: {this.state.two}
        </button>

        <button className="button-three" onClick={this.funcThree}>
          C - Cliques: {this.state.three}
        </button>
      </div>
    );
  }
}

export default FancyButtons;
