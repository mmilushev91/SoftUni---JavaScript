function solve(matrix) {
  const matrixLength = matrix.length;
  const colsSum = Array(matrixLength).fill(0);
  let rowSum;

  for (let i = 0; i < matrixLength; i++) {
    let currentSum = 0;
    for (let j = 0; j < matrixLength; j++) {
      currentSum += matrix[i][j];
      colsSum[j] += matrix[i][j];
    }
    
    if (i === 0) {
      rowSum = currentSum;
      continue;
    }
    
    if (currentSum !== rowSum) {
      console.log(false);
      return;
    }
  }
  
  const colsSumSet = new Set(colsSum);
  
  if (colsSumSet.size > 1) {
    console.log(false);
    return;
  }
  
  console.log(true);
}
