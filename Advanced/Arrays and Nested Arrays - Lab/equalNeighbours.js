function solve(matrix) {
  const matrixLength = matrix.length;
  const cords = [];

  for (let i = 0; i < matrixLength; i++) {
    const rowLength = matrix[i].length;

    for (let j = 0; j < rowLength; j++) {
      const currentVal = matrix[i][j];

      // Check RIGHT neighbor
      if (j + 1 < rowLength && matrix[i][j + 1] === currentVal) {
        cords.push([i, j, i, j + 1]);
      }

      // Check DOWN neighbor
      if (i + 1 < matrixLength && matrix[i + 1][j] === currentVal) {
        cords.push([i, j, i + 1, j]);
      }
    }
  }
  console.log(cords.length);
}

solve([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);

solve([
  ["test", "yes", "yo", "ho"],
  ["well", "done", "yo", "6"],
  ["not", "done", "yet", "5"],
]);
