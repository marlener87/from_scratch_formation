// Quand on travaille avec une APIO, la ère chose à faire et de prendre le lien de l'API et de le tester dans le navigateur.

// https://api.blablagues.net/?rub=blagues
//fetch("https://api.blablagues.net/?rub=blagues").then((res) => console.log(res));

const header = document.getElementById("header");
const content = document.getElementById("content");
//console.log(header, content);

function getJoke() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    //.then((data) => console.log(data.data.content.text_head));
    //.then((data) => (document.body.textContent = data.data.content.text_head));
    .then((data) => {
      const joke = data.data.content;
      header.textContent = joke.text_head;
      content.textContent = joke.text !== "" ? joke.text : joke.text_hidden;
    });
}

getJoke();

//document.body.addEventListener("click", () => console.log("test"));
document.body.addEventListener("click", getJoke);
