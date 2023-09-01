// Créer 3 variables pour stocker 3 chiffres aléatoires
// Donner au body une couleur de fond en rgb()
// Montrer sur le body la couleur rgb()

//Math.floor(Math.random() * 255)

// setInterval(() => {
//   let red = Math.floor(Math.random() * 255);
//   let green = Math.floor(Math.random() * 255);
//   let blue = Math.floor(Math.random() * 255);
//   // console.log(red, green, blue);

//   const color = `rgb(${red}, ${green}, ${blue})`;
//   // console.log(color);

//   document.body.style.background = color;
//   document.body.innerHTML = `<h1>${color}</h1>`;
// }, 1500);

// OU
function getColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  // console.log(red, green, blue);

  const color = `rgb(${red}, ${green}, ${blue})`;
  // console.log(color);

  document.body.style.background = color;
  document.body.innerHTML = `<h1>${color}</h1>`;
}

setInterval(getColor, 1500);
