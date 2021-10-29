import React from 'react';

// Pokemon : como o próprio nome diz, esse componente representa um pokemon.
// Esse componente recebe como entrada um objeto que contém informações
// referentes a um pokemon específico.
// Esse componente precisa retornar as seguintes informações obrigatórias
// para serem mostradas para quem usar a aplicação,
// essas informações devem ser validadas utilizando PropTypes:

// nome do pokemon;
// tipo do pokemon;
// peso médio do pokemon, acompanhado da unidade de medida usada;
// imagem do pokemon.

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className='pokemon'>
        <div className='pokemon-info'>
          <h1> {name} </h1>
          <p>
            Tipo: {type}, peso: {averageWeight.value} {averageWeight.measurementUnit}
          </p>
        </div>
        <img className='pokemon-img' src={image} alt={name} />
      </div>
    );
  }
}

export default Pokemon;
