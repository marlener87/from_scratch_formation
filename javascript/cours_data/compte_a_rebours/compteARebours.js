// Créer la logique de compte à rebours

// choice.value = 5 minutes
// choice.value * 60 = totalSeconds

// let minutes = Math.floor(totalSeconds / 60);
// let seconds = totalSeconds % 60

//const choice = document.getElementById("choice");

let totalSeconds;
let interval;

function countDown() {
  //console.log(totalSeconds);
  const minutes = Math.floor(totalSeconds / 60); // on a le nombre de minutes
  const seconds = totalSeconds % 60; // on a le nombre de secondes qui ne rentrent pas dans les minutes

  // création d'une ternaire afin que le nombre de secondes ait toujours 2 chiffres
  const sec = seconds < 10 ? "0" + seconds : seconds; // si seconds est < 10, tu rajoute un 0 devant seconds, sinon tu affiche juste seconds

  //countdownDisplay.textContent = minutes + " : " + sec; // affichage du compte à rebours
  countdownDisplay.textContent = `${minutes} : ${sec}`; // affichage du compte à rebours

  //console.log(minutes, seconds);
  if (totalSeconds > 0) {
    totalSeconds--;
  } else {
    countdownDisplay.textContent = "C'est terminé !";
    clearInterval(interval); // pour nettoyer le setInterval, comme ça il ne se joue pas à l'infini
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isNaN(choice.value)) {
    alert("Merci d'entrer un chiffre compris entre 1 et 99.");
  } else {
    totalSeconds = choice.value * 60;
    choice.value = ""; // pour vider le formulaire une fois le chiffre renseigné
    clearInterval(interval);
    interval = setInterval(countDown, 1000); // pour savoir combien on a de secondes
  }
});
// Créer un événement à la validation du form pour lancer le compte à rebours
