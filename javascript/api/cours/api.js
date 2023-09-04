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
  fetch("http://localhost:3000/posts", init2).then(() =>
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
