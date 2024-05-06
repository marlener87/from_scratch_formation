let item;

// on attrape un élément que l'on met dans let item
document.addEventListener("dragstart", (e) => {
  item = e.target;
});

// on se prémunit contre le fait qu'on ne puisse pas le bouger
document.addEventListener("dragover", (e) => {
  e.preventDefault();
});

// quand on laisse l'élément, quand on le laisse tomber, il reste là où on lui dit
document.addEventListener("drop", (e) => {
  if (e.target.getAttribute("data-draggable") == "target") {
    e.preventDefault(e);
    e.target.appendChild(item);
  }
});

document.addEventListener("dragend", () => (item = null));
