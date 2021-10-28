import React from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido',
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei',
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei',
  },
];

class Content extends React.Component {
  render() {
    return conteudos.map((content) => {
      return (
        <section key={content.conteudo} className='content'>
          <h2>{content.conteudo}</h2>
          <p>
            Bloco: {content.bloco} <br />
            Status: {content.status}
          </p>
        </section>
      );
    });
  }
}

export default Content;
