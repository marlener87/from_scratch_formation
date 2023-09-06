// lien de l'API
// https://randomuser.me/api/?results=24

//fetch("https://randomuser.me/api/?results=24").then((res) => console.log(res));

let userData = [];

// const fetchUser = () => {
//   fetch("https://randomuser.me/api/?results=24")
//     .then((res) => res.json())
//     //.then((data) => console.log(data.results));
//     .then((data) => (userData = data.results))
//     .then(() => console.log(userData));

//   //   setTimeout(() => {
//   //     console.log(userData);
//   //   }, 2000);
// };

// OU

const fetchUser = async () => {
  await fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) => (userData = data.results));
  console.log(userData);
};

// fonction d'affichage
const userDisplay = async () => {
  await fetchUser();

  // function pour traiter les dates en ISO
  const dateParser = (date) => {
    let newDate = new Date(date).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return newDate;
  };

  // function pour calculer une date
  const dayCalc = (date) => {
    // date du jour en format JS de base
    let today = new Date();
    // mettre la date en timestamp (horodatage en millisecondes de l'heure actuelle), date du jour en timestamp
    let todayTimestamp = Date.parse(today);
    let timestamp = Date.parse(date);

    //return today;
    // pour convertir les millisecondes en jours et arrondir le résultat au supérieur
    return Math.ceil((todayTimestamp - timestamp) / 8.64e7);
  };

  document.body.innerHTML = userData
    .map(
      (user) =>
        `<div class="card">
            <img src=${user.picture.large} alt="photo de ${user.name.last}"
            <h3>${user.name.first} ${user.name.last}</h3>
            <p>${user.location.city}, ${dateParser(user.dob.date)}</p>
            <em>Membre depuis : ${dayCalc(user.registered.date)} jours</em>
        </div>
        `
    )
    .join("");
};

userDisplay();
