// convert today date to input format
const today = new Date().toISOString().split("T")[0]; // date d'aujopurd'hui, quand il y a un 'T', tu casses la chaîne, et tu me donnes le 1er élément du tableau
//console.log(today);
start_date.value = today; // permet de mettre la date d'aujourd'hui dans l'input
start_date.min = today; // pour ne pas que l'utilisateur puisse choisir une date antérieure à la date d'aujourd'hui

// tomorrow date calc
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
//console.log(tomorrow);

// convert to input format
let tomorrowFormat = tomorrow.toISOString().split("T")[0];
console.log(tomorrowFormat);
end_date.value = tomorrowFormat;
end_date.min = tomorrowFormat;

start_date.addEventListener("change", (e) => {
  // on se récupère la date qui a été tapé dans l'input
  let day = new Date(e.target.value);

  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() + 1);
    end_date.value = day.toISOString().split("T")[0];
  }
});

end_date.addEventListener("change", (e) => {
  // on se récupère la date qui a été tapé dans l'input
  let day = new Date(e.target.value);

  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() - 1);
    start_date.value = day.toISOString().split("T")[0];
  }
});

// calcul du prix
const bookingCalc = () => {
  // nous donne les secondes de différences
  let diffTime = Math.abs(
    new Date(end_date.value) - new Date(start_date.value)
  );
  // nous donne les jours de différences
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // 1000 ramène en seconde, 60 en minutes, 60 en heures, 24 écart en jours
  //console.log(diffDays);
  total.textContent = diffDays * nightPrice.textContent;
};

// la fonction doit être excécuter chaque fois que les inputs sont changés
start_date.addEventListener("change", bookingCalc);
end_date.addEventListener("change", bookingCalc);

bookingCalc();
