import React, { Component } from 'react';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    const pokemonList = this.props.pokemons;
    return (
      <section className='pokedex'>
        <h1 className='title'> Amazing Pokedex </h1>
        {pokemonList.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </section>
    );
  }
}

export default Pokedex;
