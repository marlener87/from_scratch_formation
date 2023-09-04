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
fetch("monlien").then((res) => res); // '.then((res) => res)' ce bout de code ne sera executé que lorsque 'fetch('monlien')' sera fait, lorsqu'on aura un retour, des données

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
