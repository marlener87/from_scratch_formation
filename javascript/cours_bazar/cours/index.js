"use strict"; // pour le strict mode, à mettre en haut de la page
//---------------------------
// CANVAS
//---------------------------

// function draw() {
//   const canvas = document.getElementById("canvas");
//   console.log(canvas);
//   const ctx = canvas.getContext("2d");

//   ctx.fillStyle = "rgb(200,0,0)"; // le rouge
//   ctx.fillRect(50, 50, 50, 150);  // position et taille: 50 sur l'axe des X, 50 sur l'axe des Y, 50 de width, 150 de height

//   ctx.fillStyle = "rgba(0,100,200,0.5)";  // le bleu
//   ctx.fillRect(100, 30, 100, 50);

//   ctx.fillStyle = "rgba(100,100,200, 0.5)"; // le violet
//   ctx.fillRect(10, 25, 100, 100);
//   ctx.clearRect(35, 25, 40, 40);  // enlève une dimension du rectangle
//   ctx.strokeRect(125, 75, 50, 50);  // juste des lignes qui se dessinent, le carré noir

//   ctx.fillStyle = "rgba(200,100,200, 0.8)"; // le rose
//   ctx.beginPath();  // démarrer une forme géométrique
//   ctx.moveTo(180, 150); // où démarrer
//   ctx.lineTo(100, 75);  // fais une ligne
//   ctx.lineTo(100, 150); // fais une ligne
//   ctx.fill();
// }
// // on crée une fonction que l'on joue quand la page est chargée
// window.addEventListener("load", draw);

//---------------------------
// TRY / CATCH
//---------------------------

try {
  // Test un block de code
  maFonction();
} catch (err) {
  // console.log(err);
}

function isValidJSON(txt) {
  try {
    JSON.parse(txt);
    return true;
  } catch {
    return false;
  }
}

// console.log(isValidJSON(24));

// Finally
try {
  // Test un block de code
   maFonction();
} catch (err) {
  console.log(err);
} finally {
  // console.log("on est arrivé au bout !");
}

// Throw
function isNumber(num) {
  if (isNaN(num)) {
    throw "Not a number !";
  } else {
    //console.log("c'est un nombre");
  }
  // PLEIN DE CODE
}

try {
  isNumber("2d");
} catch (err) {
  // console.log("Erreur : " + err);
}

//------------
// Strict mode
//------------

 voiture = "Toyota";
 console.log(voiture);
