let array = [50, 23, 35, 1, 100, 360, 240, -10, 21, 1, 50, 100, -100, 250, 360];

function insertionSort(array: number[]): number[] {
  for (
    let iterationIndex = 1;
    iterationIndex < array.length;
    iterationIndex++
  ) {
    for (
      let shiftIndex = iterationIndex - 1;
      shiftIndex >= 0 && array[shiftIndex] > array[shiftIndex + 1];
      shiftIndex--
    ) {
      let current = array[shiftIndex + 1];
      array[shiftIndex + 1] = array[shiftIndex];
      array[shiftIndex] = current;
    }
  }
  return array;
}
console.log(insertionSort(array));
