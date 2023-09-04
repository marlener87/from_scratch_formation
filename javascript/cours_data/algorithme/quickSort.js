// fonction récursive (la fonction s'appelle elle-même)
// on prend un pivot, soit le dernier chiffre. Tout ce qui est plus petit que le pivot, va dans un tableau à gauche et tout ce qui est plus grand, va dans un tableau à droite

function quickSort(array) {
  if (array.length === 1) {
    return array;
  }

  const pivot = array[array.length - 1]; // ça trouve le dernier élément du tableau
  //console.log(pivot);
  let arrLeft = [];
  let arrRight = [];

  for (let i = 0; i < array.length - 1; i++) {
    array[i] < pivot ? arrLeft.push(array[i]) : arrRight.push(array[i]);
  }
  //console.log(arrLeft, arrRight);

  if (arrLeft.length > 0 && arrRight.length > 0) {
    // on vérifie que les 2 tableaux ne soient pas vide
    console.log(arrLeft, pivot, arrRight);
    return [...quickSort(arrLeft), pivot, ...quickSort(arrRight)];
  } else if (arrLeft.length > 0) {
    return [...quickSort(arrLeft), pivot];
  } else {
    return [pivot, ...quickSort(arrRight)];
  }
}

console.log(
  quickSort([
    1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
  ])
);
