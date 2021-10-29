import './App.css';
import pokemons from './data';
import Pokemon from './Pokemon';

function App() {
  return <Pokemon pokemon={pokemons[0]} />;
}

export default App;
