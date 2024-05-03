// créer 3 ronds de tailles différentes (dont un qui remplacera la souris)
// ajouter un évènement sur la fenêtre (window)puis animer la position de ces ronds (top, left injecter "e")
// s'assurer que les liens sont cliquables
// donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)

// Mouse Events (les évènements que l'on peut avoir sur la souris)
// le plus populaire d'entre eux est 'mouse moove'
// on va commencer par pointer la souris
//const mousemove = document.querySelector(".mousemove");
//console.log(mousemove);
// window.addEventListener("mousemove", (e) => {
//   console.log(e);

//   mousemove.style.left = e.pageX + "px";
//   mousemove.style.top = e.pageY + "px";

//   mousemovepoursuite.style.left = e.pageX + "px";
//   mousemovepoursuite.style.top = e.pageY + "px";

//   mousemovepoursuite2.style.left = e.pageX + "px";
//   mousemovepoursuite2.style.top = e.pageY + "px";
// });

// OPTIMISATION DU CODE
const mouses = document.querySelectorAll(".mouse");
window.addEventListener("mousemove", (e) => {
  mouses.forEach((mouse) => {
    mouse.style.top = e.pageY + "px";
    mouse.style.left = e.pageX + "px";
  });
});
