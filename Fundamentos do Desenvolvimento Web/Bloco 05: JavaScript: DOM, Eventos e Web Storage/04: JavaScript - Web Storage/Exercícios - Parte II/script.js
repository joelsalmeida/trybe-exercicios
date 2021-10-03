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

// ** FONT FAMILY VARIABLES
const sansSeriRadio = document.getElementById("sans-serif");
const serifRadio = document.getElementById("serif");
const monoSpaceRadio = document.getElementById("mono-space");

const mainElement = document.querySelector("main");
const fontFamilyKey = localStorage.getItem("font-family");

// CHECK FONT FAMILY
function checkFontFamily() {
  switch (fontFamilyKey) {
    case "ss":
      selectSansSerif();
      sansSeriRadio.checked = true;
      break;

    case "se":
      selectSerif();
      serifRadio.checked = true;
      break;

    case "ms":
      selectMonoSpace();
      monoSpaceRadio.checked = true;
      break;
  }
}
checkFontFamily();

// SELECT FONT FAMILY
function selectSansSerif() {
  mainElement.style.fontFamily = "var(--font-sans-serif)";
  localStorage.setItem("font-family", "ss");
}
sansSeriRadio.addEventListener("click", selectSansSerif);

function selectSerif() {
  mainElement.style.fontFamily = "var(--font-serif)";
  localStorage.setItem("font-family", "se");
}
serifRadio.addEventListener("click", selectSerif);

function selectMonoSpace() {
  mainElement.style.fontFamily = "var(--font-mono-space)";
  localStorage.setItem("font-family", "ms");
}
monoSpaceRadio.addEventListener("click", selectMonoSpace);

// ** FONT SIZE VARIABLES
const fontSizeKey = localStorage.getItem("font-size");
const fontSmallRadio = document.getElementById("font-s");
const fontMediumRadio = document.getElementById("font-m");
const fontLargeRadio = document.getElementById("font-l");

// CHECK FONT SIZE
function checkFontSize() {
  switch (fontSizeKey) {
    case "s":
      selectFontS();
      fontSmallRadio.checked = true;
      break;

    case "m":
      selectFontM();
      fontMediumRadio.checked = true;
      break;

    case "l":
      selectFontL();
      fontLargeRadio.checked = true;
      break;
  }
}
checkFontSize();

// SELECT FONT SIZE
function selectFontS() {
  mainElement.style.fontSize = "var(--font-size-s)";
  localStorage.setItem("font-size", "s");
}
fontSmallRadio.addEventListener("click", selectFontS);

function selectFontM() {
  mainElement.style.fontSize = "var(--font-size-m)";
  localStorage.setItem("font-size", "m");
}
fontMediumRadio.addEventListener("click", selectFontM);

function selectFontL() {
  mainElement.style.fontSize = "var(--font-size-l)";
  localStorage.setItem("font-size", "l");
}
fontLargeRadio.addEventListener("click", selectFontL);
