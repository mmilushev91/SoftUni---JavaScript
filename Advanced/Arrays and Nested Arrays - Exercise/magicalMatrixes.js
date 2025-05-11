function solve(matrix) {
  const matrixLength = matrix.length;
  const compareValue = sumRow(matrix[0]);

  for (let i = 0; i < matrixLength; i++) {
    const currentRowValue = sumRow(matrix[i]);
    const currentColValue = sumCol(i);

    if (currentRowValue !== compareValue || currentColValue !== compareValue) {
      console.log(false);
      return;
    }
  }
  console.log(true);

  function sumRow(arr) {
    return arr.reduce((sum, el) => sum + el, 0);
  }

  function sumCol(idx) {
    let sumCol = 0;
    for (let i = 0; i < matrixLength; i++) {
      sumCol += matrix[i][idx];
    }
    return sumCol;
  }
}

solve([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
solve([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
