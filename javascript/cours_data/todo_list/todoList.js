// Créer un form pour taper les todos
const form = document.querySelector("form");

// Stocker dans le local storage la liste
// Consulter le local storage au lancement de l'application pour rajouter les todos

// Pour stocker :
// window.localStorage.maboite = "Je stock ces données";
function storeList() {
  window.localStorage.todoList = list.innerHTML;
}

// Pour récupérer les données stockées dans le storage

function getTodos() {
  //let isInputValid =false;

  if (window.localStorage.todoList) {
    list.innerHTML = window.localStorage.todoList;
    error.innerHTML = "";
    //isInputValid = true;
  } else {
    error.innerHTML = "La Todo List est vide.";
    //isInputValid = false;
    // list.innerHTML = `<li>Cliquer sur un todo pour le suprimer</li>`;
  }
}

getTodos();

// add element
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Ajouter sur le DOM ce qui est tapé dans l'input à la validation du form
  // monInput.value
  // pour récupérer la valeur de l'input dans la console
  // quand c'est une balise, il faut utiliser '.textcontent', quand c'est un input, c'est par leur '.value'
  // console.log(item.value);
  list.innerHTML += `<li>${item.value}</li>`;
  error.innerHTML = "";
  item.value = "";
  storeList();
});

// Supprimer un todo lorsque l'on click dessus (.remove())
list.addEventListener("click", (e) => {
  // console.log(e.target);

  //   let element = e.target;
  //   element.remove();
  // OU directement
  // e.target.remove();

  if (e.target.classList.contains("checked")) {
    e.target.remove(); // supprime l'élement dans la liste (pas dans le localstorage)
  } else {
    e.target.classList.add("checked");
  }

  storeList();

  if (window.localStorage.todoList == "") {
    error.innerHTML = "La Todo List est vide.";
  }
});

// Pour extraire les données stockées :
// let mesDonnees = window.localStorage.maboite;
