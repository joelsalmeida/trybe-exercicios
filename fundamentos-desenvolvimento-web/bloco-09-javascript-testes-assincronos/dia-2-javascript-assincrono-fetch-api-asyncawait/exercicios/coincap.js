const coinCapURL = 'https://api.coincap.io/v2/assets';

async function fetchCoinCap() {
  const fetchData = fetch(coinCapURL)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => alert('Ocorreu um erro: ' + error));
  return fetchData;
}

async function createCoinList() {
  const data = await fetchCoinCap();
  const olElement = document.getElementById('coin-list');

  for (let index = 0; index < 10; index++) {
    const coin = data[index];
    const { name, symbol, priceUsd } = coin;

    const newLi = document.createElement('li');
    newLi.innerText = `${name} (${symbol}): ${priceUsd}`;
    olElement.appendChild(newLi);
  }
}

createCoinList();
