// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)
// copier le lien et le mettre dans le navigateur

const countriesContainer = document.querySelector(".countries-container");
const btnSort = document.querySelectorAll(".btnSort");
//console.log(btnSort);
//console.log(countriesContainer);
// 3 - Passer les données à une variable
let countriesData = [];
let sortMethod = "maxToMin";

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.
async function fetchCountries() {
    await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {countriesData = data;   
        //console.log(data) 
    });
    //console.log(countriesData); // le log attend que la fonction soit terminée avant de l'afficher
    countriesDisplay();
};

// 4 - Créer une fonction d'affichage des pays, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP (on les map dans la class 'countries-container')
function countriesDisplay() {
    countriesContainer.innerHTML = countriesData
        // 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
        //country.name.includes(inputSearch.value);
        // sensible à la casse, 'toLowerCase()', on appelle cette méthode
        .filter((country) => 
            country.translations.fra.common
                .toLowerCase().includes(inputSearch.value
                .toLowerCase())
        )
        // 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
        // a = le plus petit ; b = le plus grand 
        // dans un objet, il faut préciser ce qu'on veut trier
        .sort((a, b) => {
            if(sortMethod === "maxToMin") {
                return b.population - a.population; // tri décroissant
            } else if (sortMethod === "minToMax") {
                return a.population - b.population; // tri croissant
            } else if (sortMethod === "alpha") {
                return a.translations.fra.common.localeCompare(b.translations.fra.common);
            }
            
        })
        // 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)
        // slice(0, 3) = commence à 0 et coupe à 3
        .slice(0, inputRange.value)
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

// relance 'countryDisplay' si on tape dans l'input
inputSearch.addEventListener("input", countriesDisplay);

// dès que tu as un évènement sur toi 'input', joue la fonction 'countriesDisplay'
// quand la fonction sera jouée, elle arrivera à 'slice' et donc coupera tjs à 'inputRange.value'
inputRange.addEventListener("input", () => {
    countriesDisplay();
    // 'rangeValue est un span, donc on ne peut pas lui mettre '.value' pour lui donner une valeur
    rangeValue.textContent = inputRange.value;
});

btnSort.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        //console.log(e.target);
        //console.log(e.target.id);
        sortMethod = e.target.id;
        countriesDisplay();
    });
})
 





// S'appuyer sur l'architechure de l'appli de cuisine
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