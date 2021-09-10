// Imagine que você é a pessoa responsável por desenvolver uma página
// que servirá como um leitor de conteúdo escrito.
// Esse conteúdo escrito pode ser uma página de livro, uma reportagem de revista ou uma nota de jornal online.
// Até aqui, nenhuma novidade, mas essa demanda exige que você aplique preferências das pessoas leitoras
// na página para melhorar a experiência de leitura dessas pessoas.
// As pessoas devem ter o poder de alterar:
// - Cor de fundo da tela;
// - Cor do texto;
// - Tamanho da fonte;
// - Espaçamento entre as linhas do texto;
// - Tipo da fonte ( Font family ).
// Essas preferências devem ser salvas de forma que, ao retornar à página,
// as preferências que foram previamente configuradas possam ser aplicadas na tela.

const sansSerifElement = document.getElementById("sans-serif");
const serifElement = document.getElementById("serif");
const monoSpaceElement = document.getElementById("mono-space");

var fontFamilyKey = localStorage.getItem("font-family");

function checkFontFamily() {
  switch (fontFamilyKey) {
    case "Montserrat":
      selectSansSerif();
      sansSerifElement.checked = true;
      break;

    case "Merriweather":
      selectSerif();
      serifElement.checked = true;
      break;

    case "IBM Plex Mono":
      selectMonoSpace();
      monoSpaceElement.checked = true;
      break;
  }
}
checkFontFamily();

function selectSansSerif() {
  document.body.style.fontFamily = "Montserrat";
  localStorage.setItem("font-family", "Montserrat");
}
sansSerifElement.addEventListener("click", selectSansSerif);

function selectSerif() {
  document.body.style.fontFamily = "Merriweather";
  localStorage.setItem("font-family", "Merriweather");
}
serifElement.addEventListener("click", selectSerif);

function selectMonoSpace() {
  document.body.style.fontFamily = "IBM Plex Mono";
  localStorage.setItem("font-family", "IBM Plex Mono");
}
monoSpaceElement.addEventListener("click", selectMonoSpace);
