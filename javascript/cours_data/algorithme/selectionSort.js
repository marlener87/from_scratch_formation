function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i; // l'élément min c'est i pour l'instant, donc 0

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
        console.log(minIndex);
      }
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  console.log(array);
}

selectionSort([451, 2, 65, 4, 7, 98, 2, 3, 1]);
