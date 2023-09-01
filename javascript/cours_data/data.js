// rappeldes types de données
let string = "chaîne de caractère";
let number = 25;
let boolean = true;
let maVariable;

// 'typeof' sert à savoir le type des données
// console.log(typeof maVariable); // undefined car la variable n'a pas de donnée

// tableaux
let array = ["Bordeaux", "Toulouse", "Nîmes"];
// console.log(array); // (3) ["Bordeaux", "Toulouse", "Nîmes"]
// console.log(array[1]); // Toulouse
// console.log(array[1][4]); // o  c'est la lettre 'o' qui est à la 4ème position

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Olivier" }];
// console.log(array2[4].nom);

let objet = {
  // index: valeur,
  pseudo: "Olivier",
  age: 44,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};
// console.log(objet);
// console.log(objet.age); // 44
// console.log(objet.technos[0]); // Javascript

let data = [
  {
    // index: valeur,
    pseudo: "Olivier",
    age: 44,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    // index: valeur,
    pseudo: "Marlène",
    age: 36,
    technos: ["HTML", "CSS", "SASS"],
    admin: true,
  },
  {
    // index: valeur,
    pseudo: "Charlotte",
    age: 41,
    technos: ["Spock", "Eurecia", "Zoho"],
    admin: false,
  },
];

//----------------------------------------------------------------------
// Les structures de contrôles
// moyens de contrôler les choses (if, if else, while...)

// if else
// if (data[0].age > data[1].age) {
//   console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
// } else {
//   console.log(data[1].pseudo + " est plus jeune que " + data[0].pseudo);
// }

/* syntaxe différente, si il n'y a qu'une seule ligne, pas besoin d'accolade 
if (valeur à tester) valeur si vrai
else valeur si faux 
*/

/* ternaire sur 1 seule ligne 
valeur à tester ? si vrai : si faux
*/

// while
// // let w = 0;
// // while (w < 10) {
// //   w++;
// //   console.log("La valeur de w est de " + w);
// //   console.log(`La valeur de w est de : ${w}`);
// // }

// // do while
// // let d = 0;
// // do {
// //   d++;
// //   console.log(d);
// // } while (d < 5);

// // les boucles for
// for (const user of data) {
//   // document.body.innerHTML = `<li>${user}</li>`; // avec juste le '=', on écrase tout ce qu'il y avait dans le body.innerHTML de base
//   // document.body.innerHTML += `<li>${user}</li>`; // si on met '+=', on ajoute
//   document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
// }

// // d'abord on déclare la valeur de i, on lui dit jusqu'où on boucle, on incrémente i de 1 si la condition 2 n'est pas rempli
// for (i = 0; i < data.length; i++) {
//   // console.log(i);
//   // console.log(data[i]);
//   // console.log(data[i].technos[0]);
//   document.body.innerHTML += "<h2>" + data[i].pseudo + "</h2>";
// }

// // document.body.addEventListener("click", (e) => {
// //   console.log(e.target.id); // pour savoir sur quoi on a cliqué

// //   if (e.target.id === "javascript") {
// //     document.body.style.background = "yellow";
// //   } else if (e.target.id === "php") {
// //     document.body.style.background = "blue";
// //   } else if (e.target.id === "python") {
// //     document.body.style.background = "purple";
// //   } else {
// //     document.body.style.background = "white";
// //   }
// // });

// document.body.addEventListener("click", (e) => {
//   switch (e.target.id) {
//     case "javascript":
//       document.body.style.background = "yellow";
//       break;
//     case "php":
//       document.body.style.background = "aqua";
//       break;
//     case "python":
//       document.body.style.background = "purple";
//       break;
//     default:
//       document.body.style.background = "white";
//     //null;
//   }
// });

//-----------------------------------------------------------------------------
// Méthodes String
// une méthode est une fonction qui a déjà été codée, qui est déjà présente. Une fonction à laquelle on a accès, qui peut être présente dans le code source de JS. Et quand on l'appelle, JS sait de quoi on parle
// let string2 = "Javascript est un langage orienté objet";
// console.log(typeof string2);
// console.log(eval("1" + 2));
// console.log(eval(parseInt("1") + 2));
// console.log(typeof parseInt("42"));
// console.log(isNaN(string)); // true, car is not a number
// console.log(isNaN(48)); // false, car is a number
// console.log(string2.length);
// console.log(string2[22]);
// console.log(string2[string2.length - 1]);
// // la 'length' n'est pas pareil que l'index. la 'length' c'est la longueur de caractères qui commence à 1, alors que l'index commence à 0
// // length ≠ index

// console.log(string2.indexOf("langage")); // 18, car le mot commence à l'index 0
// console.log(string2.indexOf("l"));
// console.log(string2.indexOf("x")); // -1 car c'est un terme qu'il n'a pas, qu'il ne connaît pas

// let newString = string2.slice(2); // coupe les 2 premiers éléments et tu garde le reste dans newString
// let newString2 = string2.slice(5, 17);
// console.log(newString);
// console.log(newString2);

// console.log(string2.split("a"));

// console.log(string2.toLowerCase());
// console.log(string2.toUpperCase());
// console.log(string2.replace("Javascript", "PHP"));

//--------------------------------------------------------------------------
// Méthodes pour les numbers
// let number2 = 42.1234;
// let numberString = "42.12 est un chiffre";
// console.log(number2.toFixed(2));
// console.log(parseInt(numberString));
// console.log(parseFloat(numberString));

// // Méthode Math (objet de JS)
// console.log(Math.PI);
// console.log(Math.round(4.4));
// console.log(Math.round(4.5)); // arrondi
// console.log(Math.floor(4.9)); // arrondi à l'inférieur
// console.log(Math.ceil(4.1)); // arrondi au supérieur
// console.log(Math.pow(2, 7)); // pour les puissances
// console.log(Math.sqrt(16)); // racine carrée
// console.log(Math.random()); // pour avoir un chiffre entre 0 et 1
// console.log(Math.random() * 50); // pour avoir un chiffre jusqu'à 49
// console.log(Math.floor(Math.random() * 50)); // pour ne pas avoir de chiffre après la virgule

//------------------------------------------------------
// Méthodes pour les tableaux
let array3 = ["Javascript", "PHP", "Python"];
// let array4 = ["Ruby", "Solidity"];

// // let newArray = array3.concat(array4);
// // console.log(newArray);

// // let newArray = [...array3, ...array4]; // spread operator https://www.w3schools.com/react/react_es6_spread.asp
// // console.log(newArray);
// // console.log(array3.join("-"));
// // console.log(array3.slice(1));
// // console.log(newArray.slice(2, 5));
// // console.log(array3.indexOf("Python"));
// // array3.forEach((languages) => console.log(languages));

// // console.log(array3.every((language) => language === "PHP"));
// // console.log(array3.some((language) => language === "PHP"));

// // let shift = array3.shift();
// // console.log(array3);
// // console.log(array3.pop());

const restArray = array3.splice(1, 1, "C++");
console.log(restArray); // permet de récupérer le ou les éléments supprimé

array3.splice(0, 2, "Java");
console.log(array3);

// // IMPORTANT //
// let arrayNumber = [4, 74, 28, 12, 1];
// console.log(arrayNumber.reduce((x, y) => x + y)); // pour faire une opération

// arrayNumber.push(17); // pour ajouter un élément au tableau
// console.log(arrayNumber);

// // FILTER (permet de filtrer), SORT (permet de trier), MAP (permet de lister les choses, un peu comme un forEach)
// // console.log(arrayNumber.filter((number) => number > 10));
// // console.log(arrayNumber.sort());
// // console.log(arrayNumber.sort((a, b) => a - b));
// // console.log(arrayNumber.sort((a, b) => b - a));
// // console.log(arrayNumber.filter((number) => number > 10).sort((a, b) => a - b)); // on peut ajouter des méthodes les unes à la suite des autres

// arrayNumber.map((number) => console.log(number));
// //arrayNumber.map((number) => (document.body.innerHTML = number));
// arrayNumber.map(
//   (number) => (document.body.innerHTML += `<li> ${number} </li>`)
// );

// document.body.innerHTML = arrayNumber
//   .map((number) => `<li> ${number} </li>`)
//   .join("");

//--------------------------------------------------------------------------
// Méthodes Objects
// document.body.innerHTML = data
//   .filter((user) => user.admin === false)
//   .filter((user) => user.pseudo.includes("e"))
//   .sort((a, b) => a.age - b.age)
//   .map(
//     (user) =>
//       `
//       <div class="user">
//         <h2>${user.pseudo}</h2>
//         <p>Age : ${user.age} ans</p>
//         <p>Status : ${user.admin ? "Modérateur" : "Membre"}</p>
//       </div>
//       `
//   )
//   .join("");

//---------------------------------------------------------------------------
// Les dates

// date classique
let date = new Date();
//console.log(date);

// Timestamp (le nombre de secondes qui se sont écoulées entre le 1 janvier 1970 et aujourd'hui en millisecondes. Chiffre énorme)
let timestamp = Date.parse(date);
//console.log(timestamp);

// IsoString
let iso = date.toISOString();
//console.log(date.toISOString());

function dateParser(chaine) {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  return newDate;
}
// console.log(dateParser(date));
// console.log(dateParser(timestamp));
// console.log(dateParser(iso));

//------------------------------------------------
// Destructuring

let moreData = {
  destVar: ["Element 1", "Element 2"],
  toto: "hey coucou",
  titi: 12,
  tutu: true,
  tata: () => {},
};

const { destVar, toto, tutu } = moreData; // const destVar = moreData.destVar;

// console.log(moreData.destVar);
// console.log(destVar);

let array5 = [70, 80, 90];
let [x, y, z] = array5;
console.log(x);
console.log(y);
console.log(z);

console.log(iso);
const dateDestructuring = (chaine) => {
  let newDate = chaine.split("T")[0];
  // console.log(newDate.split("-"));
  // console.log(newDate);
  let [y, m, d] = newDate.split("-");
  return [d, m, y].join("/");
};
console.log(dateDestructuring(iso));

//--------------------------------------------------------------------
// Les Datasets (les données qu'on peut mettre dans une balise)

const h3js = document.getElementById("javascript");
// console.log(h3js);
// console.log(h3js.id);
// console.log(h3js.dataset);
// console.log(h3js.dataset.lang);

const h3 = document.querySelectorAll("h3");
// h3.forEach((language) => console.log(language.dataset));
// h3.forEach((language) => console.log(language.dataset.lang));

//------------------------------------------------------------------
// Les Regex
let mail = "from_scratch33@gmail.com";
// console.log(mail.search(/from/));
// console.log(mail.replace(/from/, "de"));
// console.log(mail.match(/SCratch/i));
// console.log(mail.match(/[zug]/));
// console.log(mail.match(/[123]/));

// tous les chiffres
//console.log(mail.match(/\d/));

// matcher toutes les lettres
//console.log(mail.match(/[a-z]/));

// pour contrôler un mail
console.log(mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i));

let separator = 254789631455;
console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."));
