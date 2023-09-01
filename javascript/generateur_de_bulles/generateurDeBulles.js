const counterDisplay = document.querySelector("h3");
let counter = 0;

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;
  // console.log(size);

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  /* les bulles partent plus vers la droite que vers la gauche, donc pour qu'elles partent aussi vers la gauche, il faut leur donner une left négative. Il faut randomiser que le chiffre soit soit positif, soit négatif */

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  /* quand on clique sur la bulle, elle se détruit */
  bubble.addEventListener("click", () => {
    /* on incrémente le compteur à chaque fois qu'on explose une bulle */
    counter++;
    // console.log(counter);
    counterDisplay.textContent = counter;
    bubble.remove();
  });

  /* pour supprimer les bulles */
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

setInterval(bubbleMaker, 1000);
