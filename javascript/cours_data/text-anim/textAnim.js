const target = document.getElementById("target");
let array = ["développeuse", "danseuse", "pâtissière"];
let wordIndex = 0;
let letterIndex = 0;

//target.textContent = array[0];

// automatiser la création de lettre
const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  //letter.textContent = array[0][1];
  letter.textContent = array[wordIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  }, 2800);
};

// la récursivité
// createLetter();
const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 100);
};
//loop();
