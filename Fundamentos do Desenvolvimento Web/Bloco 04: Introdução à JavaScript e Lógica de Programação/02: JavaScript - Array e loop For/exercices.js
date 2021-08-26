// Obtenha o valor "Serviços" do array menu :

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
console.log("index 1 of menu: " + menuServices);

// Procure o índice do valor "Portfólio" do array menu :

let indexOfPortfolio = menu.indexOf("Portfólio");
console.log("index of portfólio: " + indexOfPortfolio);

// Adicione o valor "Contato" no final do array menu :

menu.push("Contato");
console.log("menu: " + menu);

// Utilize o for para imprimir os elementos da lista groceryList com o console.log() :

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index++) {
    console.log("grocery item: " + groceryList[index]);
}

// Utilize o for/of para imprimir os elementos da lista names com o console.log() :

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (const iterator of names) {
    console.log("name: " + iterator);
}