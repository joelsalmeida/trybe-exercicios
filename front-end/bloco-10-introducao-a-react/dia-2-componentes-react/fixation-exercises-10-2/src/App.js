import './App.css';
import Image from './Image';

// Chame o componente Image , de forma que seja mostrada esta imagem,
// ou o texto Cute cat staring , caso a imagem não consiga ser carregada.

const imgLink = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg';

function App() {
  return <Image source={imgLink} alternativeText='Cute cat staring' />;
}

export default App;
