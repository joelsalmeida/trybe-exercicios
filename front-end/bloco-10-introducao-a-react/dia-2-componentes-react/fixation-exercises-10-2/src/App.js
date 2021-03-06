import './App.css';
import Image from './Image';
import Order from './Order';
import UserProfile from './UserProfile';

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

const users = [
  {
    id: 102,
    name: 'João',
    email: 'joao@gmail.com',
    avatar: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png',
  },
  {
    id: 77,
    name: 'Amélia',
    email: 'amelia@gmail.com',
    avatar: 'https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png',
  },
];

function App() {
  return (
    <div>
      <Image source={imgLink} alternativeText='Cute cat staring' />
      
      <h1> Orders recently created </h1>
      <Order order={headphone} />
      <Order order={energyDrink} />
      
      <h1>User Profile</h1>
      {users.map((user) => <UserProfile key={user.email} user={user}/>)}
    </div>
  );
}

// Complete o código acima de forma que os pedidos referentes aos produtos
// headphone e energyDrink sejam filhos de App.

export default App;
