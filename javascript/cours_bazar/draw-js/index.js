const canvas = document.getElementById("art");
const ctx = canvas.getContext("2d");

function getMousePos(e) {
  const rect = canvas.getBoundingClientRect();  // pour avoir les dimensions du rectangle
  //console.log(rect);
  return {
    x: e.clientX - rect.left, // la valeur de la souris en X dans le rectangle
    y: e.clientY - rect.top,  // la valeur de la souris en Y dans le rectangle
  };
}

function mouseMove(e) {
  const mousePos = getMousePos(e);
  ctx.lineTo(mousePos.x, mousePos.y);
  ctx.stroke(); // fais une ligne
  ctx.strokeStyle = "teal";
  ctx.lineWidth = 5;
}

canvas.addEventListener("mousedown", (e) => {
  e.preventDefault();
  console.log(getMousePos(e));
  const mousePos = getMousePos(e);
  ctx.beginPath();
  ctx.moveTo(mousePos.x, mousePos.y); // valeur dynamique des lignes

  canvas.addEventListener("mousemove", mouseMove);
  canvas.addEventListener("mouseup", () => {  // quand la souris se relève, arrête d'écrire
    canvas.removeEventListener("mousemove", mouseMove);
  });
});

reset.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
