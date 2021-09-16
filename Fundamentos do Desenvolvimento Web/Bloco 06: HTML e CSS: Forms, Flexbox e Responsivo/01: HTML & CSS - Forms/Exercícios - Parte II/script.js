const brazilianStates = [
  "Acre (AC)",
  "Alagoas (AL)",
  "Amapá (AP)",
  "Amazonas (AM)",
  "Bahia (BA)",
  "Ceará (CE)",
  "Distrito Federal (DF)",
  "Espírito Santo (ES)",
  "Goiás (GO)",
  "Maranhão (MA)",
  "Mato Grosso (MT)",
  "Mato Grosso do Sul (MS)",
  "Minas Gerais (MG)",
  "Pará (PA)",
  "Paraíba (PB)",
  "Paraná (PR)",
  "Pernambuco (PE)",
  "Piauí (PI)",
  "Rio de Janeiro (RJ)",
  "Rio Grande do Norte (RN)",
  "Rio Grande do Sul (RS)",
  "Rondônia (RO)",
  "Roraima (RR)",
  "Santa Catarina (SC)",
  "São Paulo (SP)",
  "Sergipe (SE)",
  "Tocantins (TO)",
];

// GENERATE STATES LIST
const stateListElement = document.querySelector("#state");

function createStateOptions(statesList, elementFather) {
  statesList.forEach((state) => {
    let newOption = document.createElement("option");
    newOption.setAttribute("value", state.toLowerCase());
    newOption.innerText = state;
    elementFather.appendChild(newOption);
  });
}
createStateOptions(brazilianStates, stateListElement);

// ** CHECK INPUT FIELDS **
const submitButton = document.querySelector("#send");
const clearButton = document.querySelector("#clear");
const inputFields = document.getElementsByTagName("input");

// CHECK CHARACTERS LENGTH
function checkMaxLength() {
  for (const inputElement of inputFields) {
    let maxLength = inputElement.getAttribute("maxlength");
    let inputLength = inputElement.value.length;

    if (maxLength) {
      console.log(inputLength <= maxLength ? true : false);
    }
  }
}

// CHECK DATE FORMAT
const dateField = document.querySelector("#start");

function checkDateFormat() {
  let onlyNumbers = dateField.value.split("/");
  console.log(onlyNumbers);

  let checkDay = onlyNumbers[0] > 0 && onlyNumbers[0] <= 31;
  let checkMonth = onlyNumbers[1] > 0 && onlyNumbers[1] <= 12;
  let checkYear = onlyNumbers[2] > 0;

  checkDay && checkMonth && checkYear === true ? true : false;
  console.log(checkDay && checkMonth && checkYear === true ? true : false);
}

// SUBMIT FORM - CALL FOR ALL CHECKS
function submitForm(event) {
  event.preventDefault();
  checkMaxLength();
  checkDateFormat();
}
submitButton.addEventListener("click", submitForm);
