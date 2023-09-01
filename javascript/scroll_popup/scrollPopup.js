let playOnce = true;
// Créer un événement au scroll

// les évènements sur le scroll sont avec l'évènement window
window.addEventListener("scroll", () => {
  // Réduire la navbar quand on descend vers le site, la remettre à sa taille initiale si on remonte tout en haut
  if (window.scrollY > 50) {
    // si la valeur que l'on a logguée est > à 50, alors la navigation est réduite
    navbar.style.height = "50px";
  } else {
    // sinon, elle reprend sa taille normale
    navbar.style.height = "90px";
  }

  // Faire apparaitre l'image de la partie 'improvise'
  // la valeur du scroll en fonction de la taille de l'écran, il faut donc mettre une valeur en pourcentage
  // valeur globale/totale du body
  // element.offsetHeight = propriété permettant d'obtenir la hauteur d'un élément par rapport à la mise en page
  // console.log(document.body.offsetHeight);
  // le niveau de scroll (le haut de la barre de défilement) = window.scrollY
  // pour avoir la hauteur totale de la page. Récupère la hauteur (en px) de la partie visible de la fenêtre de navigation en incluant, si elle est affichée, la barre de défilement horizontale = window.innerHeight

  let scrollValue =
    (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  //   console.log(
  //     (window.scrollY + window.innerHeight) / document.body.offsetHeight
  //   );
  if (scrollValue > 0.45) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = "none";
  } else {
    imgImprovise.style.opacity = 0;
    imgImprovise.style.transform = "translateX(-200px)";
  }

  // Faire apparaître la popup quand on est en bas du site
  if (scrollValue > 0.85 && playOnce) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
    playOnce = false;
  }
});

// Bonus : quand on clique sur la popup elle disparaît pour toujours
closeBtn.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.transform = "translateX(400px)";
});
