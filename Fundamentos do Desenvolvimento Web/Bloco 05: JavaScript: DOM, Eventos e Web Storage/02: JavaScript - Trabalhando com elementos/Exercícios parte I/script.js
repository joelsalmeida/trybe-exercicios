// PARTE 01 - BUSCANDO ELEMENTOS
// Acesse o elemento elementoOndeVoceEsta.
let elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta")
console.log(elementoOndeVoceEsta);

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
elementoOndeVoceEsta.parentElement.style.color = "red";

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
let primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
primeiroFilhoDoFilho.innerText = "Primeiro filho do filho. :)";

// Acesse o primeiroFilho a partir de pai.
let pai = document.getElementById("pai");
console.log(pai.firstElementChild);

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
console.log(elementoOndeVoceEsta.parentElement.firstElementChild)

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
console.log(elementoOndeVoceEsta.nextSibling);

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
console.log(elementoOndeVoceEsta.nextSibling.nextSibling);

// Agora acesse o terceiroFilho a partir de pai.
console.log(pai.children[2]);

// PARTE 02 - CRIANDO ELEMENTOS
// Crie um irmão para elementoOndeVoceEsta.
let newSection = document.createElement("section")
newSection.innerText = "Irmão de elementoOndeVoceEsta."
pai.appendChild(newSection);

// Crie um filho para elementoOndeVoceEsta.
let anotherSection = document.createElement("section");
anotherSection.innerText = "Filho de elementoOndeVoceEsta.";
elementoOndeVoceEsta.appendChild(anotherSection);

// Crie um filho para primeiroFilhoDoFilho.
let newParagraph = document.createElement("p");
newParagraph.innerHTML = "O propósito da vida é encontrar o maior fardo que você pode carregar e carregá-lo.";
primeiroFilhoDoFilho.appendChild(newParagraph);

// A partir desse filho criado, acesse terceiroFilho.
let proposito = primeiroFilhoDoFilho.firstElementChild;
console.log(proposito.parentElement.parentElement.parentElement.children[2]);

// PARTE 03 - REMOVENDO ELEMENTOS
// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho.

let paiDoPai = document.getElementById("paiDoPai");
pai.removeChild(document.getElementById("primeiroFilho"));
pai.removeChild(document.getElementById("terceiroFilho"));
pai.removeChild(document.getElementById("quartoEUltimoFilho"));
pai.removeChild(pai.lastChild)

elementoOndeVoceEsta.removeChild(elementoOndeVoceEsta.lastChild)
elementoOndeVoceEsta.removeChild(elementoOndeVoceEsta.lastChild)
elementoOndeVoceEsta.removeChild(elementoOndeVoceEsta.lastChild)