import './App.css';
import Image from './Image';
import Order from './Order';

// Chame o componente Image , de forma que seja mostrada esta imagem,
// ou o texto Cute cat staring , caso a imagem não consiga ser carregada.

const imgLink = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg';

const headphone = {
  id: 102,
  user: 'cena@gmail.com',
  product: 'Razer Headphone',
  price: {
    value: 99.99,
    currency: 'dollars',
  },
};

const energyDrink = {
  id: 77,
  user: 'cena@gmail.com',
  product: 'Monster 500mL',
  price: {
    value: 9.99,
    currency: 'dollars',
  },
};

function App() {
  return (
    <div>
      <Image source={imgLink} alternativeText='Cute cat staring' />
      <h1> Orders recently created </h1>
      <Order order={headphone} />
      <Order order={energyDrink} />
    </div>
  );
}

// Complete o código acima de forma que os pedidos referentes aos produtos
// headphone e energyDrink sejam filhos de App.

export default App;
