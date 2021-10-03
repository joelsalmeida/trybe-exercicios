// localStorage - salva os dados sem data de expiração .
// Os dados não serão removidos quando o browser for fechado,
// ou seja, eles ficarão disponíveis enquanto não forem explicitamente removidos.

// localStorage.length
console.log("local storage: " + localStorage.length);

// localStorage.setItem("chave", "valor")
localStorage.setItem("firstName", "Joel");
localStorage.setItem("lastName", "Almeida :)");
console.log("local storage: " + localStorage.length);

// localStorage.getItem("chave")
console.log("firstName: " + localStorage.getItem("firstName"));
console.log("lastName: " + localStorage.getItem("lastName"));

// localStorage.removeItem("chave")
localStorage.removeItem("firstName");

// localStorage.clear()
localStorage.clear();

// sessionStorage - salva os dados apenas para a sessão atual.
// Os dados são removidos assim que a pessoa fecha a aba (tab) ou o browser.

console.log("session storage: " + sessionStorage.length);

sessionStorage.setItem("number", "7");
sessionStorage.setItem("fruit", "orange");
console.log("session storage: " + sessionStorage.length);

console.log(sessionStorage.getItem("number"));
console.log(sessionStorage.getItem("fruit"));

sessionStorage.removeItem("number");

// É possível salvar outras estruturas em localStorage e sessionStorage
let organization = {
  name: "trybe",
  since: 2019,
};

// objeto "storage" pode ser localStorage ou sessionStorage

localStorage.setItem("trybe", JSON.stringify(organization));
let org = JSON.parse(localStorage.getItem("trybe"));
console.log(org); // { name: "trybe", since: 2019 }

let classes = ["2019/set", "2019/oct"];
sessionStorage.setItem("classes", JSON.stringify(classes));
let cls = JSON.parse(sessionStorage.getItem("classes"));
console.log(cls); // ["2019/set", "2019/oct"]
