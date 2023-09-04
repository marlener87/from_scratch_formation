// un tableau
// on va tester si il est plus grand que son voisin, si oui, on interverti

// function bubbleSort(array) {
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = 0; j < array.length - 1 - i; j++) {
//       if (array[j] > array[j + 1]) {
//         // let temp = array[j];
//         // array[j] = array[j + 1];
//         // array[j + 1] = temp;
//         [array[j], array[j + 1]] = [array[j + 1], array[j]];
//         console.log(array);
//       }
//     }
//   }
//   console.log(array);
// }
// bubbleSort([451, 2, 65, 4, 7, 98, 2, 3, 1]);

// OU
function bubble(array) {
  console.log(array.sort((a, b) => a - b));
}

bubble([451, 2, 65, 4, 7, 98, 2, 3, 1]);
