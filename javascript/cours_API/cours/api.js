// ----------------------   AVANT
// XMLHttpRequest : méthode la plus répandue avant qu'on invente le 'fetch'. jQuery était très populaire avant, car cette méthode était chiante pour faire des requêtes et autres.

// pour aller chercher des données sur les choses distantes
// function reqListener() {
//   console.log(this.responseText);
// }

// let req = new XMLHttpRequest();
// req.onload = reqListener;
// // req.open("get", "data.txt", true);
// // req.open("get", "data.json", true);
// req.open("get", "https://api.blablagues.net/?rub=blagues", true);
// req.send();

// ---------------------   MAINTENANT
// FETCH
// signifie 'va chercher'. C'est plus pratique que XMLHttpRequest

// façon asynchrone. Avec 'then', on fait une promesse
// fetch théorique
// fetch("https://api.blablagues.net/?rub=blagues", "objet d'options")
//   .then(
//     (response) => {
//       // response
//       console.log(response);
//     }
//     //).then // ... on peut en mettre plusieurs
//   )
//   .catch((error) => console.log(error));

// fetch("data.txt").then((res) => console.log(res));
fetch("data.txt") // pour aller chercher un fichier .txt
  .then((res) => res.text())
  .then((data) => console.log(data));

//fetch("data.json").then((res) => console.log(res));
fetch("data.json") // pour aller chercher un fichier .json
  .then((res) => res.json())
  .then((data) => console.log(data));

const myHeaders = new Headers();
const init = {
  method: "GET", // apporte-moi des données
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};
//fetch("http://facebook.com").then((res) => console.log(res));
//fetch("data.json", init).then((res) => console.log(res));

// CRUD => Create (POST), Read (GET), Update (PUT), Delete (DELETE)

const init2 = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    pseudo: "From Scratch",
    message: "Yo les gens !",
    age: 36,
  }),
  mode: "cors",
  credentials: "same-origin",
};

const init3 = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
  mode: "cors",
  credentials: "same-origin",
};

document.querySelector("form").addEventListener("submit", () => {
  //   fetch("http://localhost:3000/posts", init2).then(() =>
  //     console.log("data envoyée")
  //   );
  fetch("http://localhost:3000/users", init2).then(() =>
    console.log("data envoyée")
  );
});

document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:3000/posts/2", init3).then(() =>
    console.log("data envoyée")
  );
});

//---------------------------------
// Les principales façons d'être asynchrone en JS
// pouvoir exécuter du code et dire à JS : attends avant de faire ceci, attends que ceci s'exécute
// JS est un langage de script, donc il lit de haut en bas, il parcours et ne s'arrête jamais

// la méthode primaire de faire de l'asynchrone = setTimeout
setTimeout(() => {
  console.log("test");
}, 2000); // 'test' est appeler 2 sec après avoir été appelé

// les promesses (promise), async, await
//promise
//fetch("monlien").then((res) => res); // '.then((res) => res)' ce bout de code ne sera executé que lorsque 'fetch('monlien')' sera fait, lorsqu'on aura un retour, des données

// async/await
function fetchData() {
  fetch("monlien");

  executeFonction();
} // il ferait tout d'un coup, sans attendre

async function fetchData() {
  await fetch("monlien");
  // attend que le await soit executé avant de faire la suite
  // il peut y avoir une série de await
  executeFonction();
}

// pour la fonction fléchée
const fetchData2 = async () => {
  await fetch("monlien");
  // attend que le await soit executé avant de faire la suite
  // il peut y avoir une série de await
  executeFonction();
};

//---------------------
// LE JSON
// format pour faire transiter des données
// méthode .json() => méthode qui s'autorésout, donc on la met dans une promesse en renvoyant le body de la requête
// on fait une requête de data.json et on les transforme de telle sorte que la réponse soit lisible
fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    // stringify => il convertit en json
    //console.log(JSON.stringify(data)); // on transforme un objet en chaîne de caractères json
    let settings = JSON.stringify(data);
    //console.log(settings);
    // méthode 'parse' => transforme json en objet js
    console.log(JSON.parse(settings));
  });

//-----------------
// web API
// API qu'on a de base dans le navigateur (geolocation, canva, history, localstorage)

//----------------------------------------------------------------------------------------------------
// CLIENT STORAGE

//-------------------
// localStorage (objet de 'window)
localStorage.data = "Je stocke la data dans le localStorage";
// pour récupérer la data
console.log(localStorage.data);
document.body.textContent = localStorage.data;
// pour supprimer l'éleemnt du localStorage
localStorage.removeItem("data");

// on ne peut pas passer un objet, one ne peut pas passer un tableau ; il faut passer une chaîne de caractère
const obj = {
  name: "Denis",
  age: 22,
};
//localStorage.user = obj; // il ne saura pas l'interpréter, car ça n'est pas des chaînes de caractères. il faut utiliser une méthode pour le mettre en chaîne de caractères
localStorage.user = JSON.stringify(obj);
console.log(localStorage.user);
console.log(JSON.parse(localStorage.user));

// pour mettre à jour un localStorage
//localStorage.user = "Denis";

//-----------------
// Session Storage
// données stockées pendant la durée de la session de l'utilisateur, quand la page est fermée, la session est terminée. Pour stocker des choses provisoirement, de façon courte
sessionStorage.dataSettings = "55px";
console.log(sessionStorage.dataSettings);
// pour supprimer la session storage
sessionStorage.clear();

//----------------
// Cookies
// plutôt utilisé en back
// qch qui est envoyé d'un serveur vers un navigateur, puis le cookie est stocké par le navigateur. Tous les cookies qui sont stockés sont tjs envoyés, ce qui permet de vérifier que l'on est bien la bonne personne, si on est bien connecté, souvent utilisé comme un token
console.log(document.cookie);

// pour ajouter un cookie
document.cookie = "username=FromScratch";
// si on veut que le cookie reste plus longtemps que la session
document.cookie = "pseudo=FS; path=/; max-age=450000; secure; samesite";
// ou à la place de max-age, mettre expires=Thu, 31 Dec 2099 23:59:59 GMT
