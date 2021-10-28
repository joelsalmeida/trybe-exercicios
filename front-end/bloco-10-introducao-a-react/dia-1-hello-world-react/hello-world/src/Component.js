import React from 'react';

// Na pasta src , crie um arquivo chamado Component.js crie um componente
// que retorne um <h1> com o seu nome um parágrafo, <p> , com uma breve descrição sobre você.

class Component extends React.Component {
  render() {
    return (
      <>
        <h1>Joel</h1>
        <p>Full Stack</p>
      </>
    );
  }
}

export default Component;
