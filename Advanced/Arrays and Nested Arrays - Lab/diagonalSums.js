function solve(matrix) {
  const matrixLength = matrix.length;
  let left = right = 0;
  
  for (let i = 0; i < matrixLength; i++) {
     left += matrix[i][i]
     right += matrix[i][matrixLength - 1 - i];
  }
  console.log(`${left} ${right}`);
}
