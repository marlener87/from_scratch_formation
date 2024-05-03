// https://www.themealdb.com/api/json/v1/1/search.php?s=tomato
const result = document.getElementById("result");
const form = document.querySelector("form");
const input = document.querySelector("input");

// on se créé une boîte de type array
// si je veux transmettre à cette boîte tout le résultat de la recherche, il faut que je mette:  (meals = data.meals))
let meals = [];

// fonction pour fetcher
async function fetchMeals(search) {
  // on veut rendre dynamique la partie où il y a écrit 'chicken', ce que l'utilisateur cherche, doit se mettre à la place de chicken
  //await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
  await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search) // on concatène avec search
    // OU await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then((res) => res.json())
    .then((data) => (meals = data.meals));

  console.log(meals);
}

// fonction pour afficher
// affichage des plats
function mealsDisplay() {
  if (meals === null) {
    result.innerHTML = "<h2>Aucun résultat</h2>";
  } else {
    meals.length = 12;

    result.innerHTML = meals
      .map(
        (
          meal // si il n'y a rien derrière la fonction, c'est comme si il y avait des parenthèses
        ) => {
          // si on met des accolades, on doit obligatoirement retourner qch, donc mettre un 'return'

          // on stocke les ingrédients quelque part
          let ingredients = [];
          for (i = 1; i < 21; i++) {
            if (meal[`strIngredient${i}`]) {
              // on se liste les ingrédients
              //console.log("true !");
              let ingredient = meal[`strIngredient${i}`];
              let measure = meal[`strMeasure${i}`];
              //console.log(ingredient + " - " + measure);
              ingredients.push(`<li>${ingredient} - ${measure}</li>`);
            }
          }
          console.log(ingredients);

          return `
          <li class="card">
            <h2>${meal.strMeal}</h2>
            <p>${meal.strArea}</p>
            <img src=${meal.strMealThumb} alt="photo ${meal.strMeal}">
            <ul>${ingredients.join("")}</ul>
          </li>
        `;
        }
      )
      .join("");
  }
}

// les eventListener, tout ce qui déclenche l'application

input.addEventListener("input", (e) => {
  //console.log("test");
  //console.log(e.target.value);
  fetchMeals(e.target.value);

  // pour faire la recherche en temps réel
  //fetchMeals(e.target.value).then(() => mealsDisplay());
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //fetchMeals().then(() => mealsDisplay());
  mealsDisplay();
});

//fetchMeals();
