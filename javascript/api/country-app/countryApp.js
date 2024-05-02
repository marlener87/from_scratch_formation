// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)
// copier le lien et le mettre dans le navigateur

const countriesContainer = document.querySelector(".countries-container");
console.log(countriesContainer);
// 3 - Passer les données à une variable
let countriesData = [];

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.
async function fetchCountries() {
    await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {countriesData = data;   
        console.log(data) 
    });
    console.log(countriesData); // le log attend que la fonction soit terminée avant de l'afficher
    countriesDisplay();
};

// 4 - Créer une fonction d'affichage des pays, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP (on les map dans la class 'countries-container')
function countriesDisplay() {
    countriesContainer.innerHTML = countriesData
        .map((country) => `
            <div class="card">
                <img src="${country.flags.svg}" alt="drapeau ${country.translations.fra.common}">
                <h2>${country.translations.fra.common}</h2>
                <h4>${country.capital}</h4>
                <p>Population : ${country.population.toLocaleString()}</p>
            </div>
        `)
        .join("");  // pour enlever la ',' du map
}



window.addEventListener('load', fetchCountries);




// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
//country.name.includes(inputSearch.value);
 

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays

// S'appuyer sur l'architechure de l'ppli de cuisine
// Architecture de la fonction d'affichage
// monTableau
//     .filter((country) => country.nomdupays.includes(inputSearch.value))
//     .sort((a, b) => {
//         if (...) {
//             return ...
//         } else if (...) {
//             return ...
//         }
//     })
//     .slice(0, inputRange.value)
//     .map((country) => `
//         <div class="card">

//         </div>
//     `)

//countriesContainer.innerHtml = monTableau