// créer un évènement au scroll
// cacher la navbar si l'utilisateur commence à descendre et la sortir quand il remonte
// stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu
// connaître le niveau de scroll (window.scrollY)

let lastScroll = 0;

// les évènements sur le scroll sont avec l'évènement window
window.addEventListener("scroll", () => {
  // console.log("Test !");
  //console.log(window.scrollY); // valeur en px qui a été scrollée

  if (window.scrollY < lastScroll) {
    // si la valeur que l'on a logguée est < à 120px, alors révéler la navigation
    navbar.style.top = 0;
  } else {
    // sinon, tu disparaîs
    navbar.style.top = "-60px";
  }

  lastScroll = window.scrollY;
});
