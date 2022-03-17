const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

const sortByName = (a, b) => a.name.localeCompare(b.name, { ignorePunctuation: true });

app.get('/recipes', (_req, res) => {
  res.json(recipes.sort(sortByName));
});

app.get('/drinks', (_req, res) => {
  res.json(drinks.sort(sortByName));
});

app.get('/recipes/search', (req, res) => {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter(
    (recipe) => recipe.name.includes(name) && recipe.price < Number(maxPrice)
  );

  return res.status(200).json(filteredRecipes);
});

app.get('/drinks/search', (req, res) => {
  const { name } = req.query;
  const filteredDrinks = drinks.filter((drink) => drink.name.includes(name));

  return res.status(200).json(filteredDrinks);
});

app.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((recipe) => recipe.id === Number(id));

  if (!recipe) return res.status(404).json({ message: 'Receita não encontrada.' });
  return res.status(200).json(recipe);
});

app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drink = drinks.find((drink) => drink.id === Number(id));

  if (!drink) return res.status(404).json({ message: 'Bebida não encontrada.' });
  return res.status(200).json(drink);
});

app.post('/recipes', (req, res) => {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime });
  res.status(201).json({ message: 'Receita criada com sucesso!' });
});

app.post('/drinks', (req, res) => {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });
  res.status(200).json({ message: 'Drink adicionado com sucesso!' });
});

app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((recipe) => recipe.id === parseInt(id));
  const notFound = -1;

  if (recipeIndex === notFound)
    return res.status(404).json({ message: 'Receita não encontrada.' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((recipe) => recipe.id === parseInt(id));
  const notFound = -1;

  if (recipeIndex === notFound)
    return res.status(404).json({ message: 'Receita não encontrada.' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
