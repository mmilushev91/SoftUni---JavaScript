function solve(matrix) {
  const matrixLength = matrix.length;
  const cords = [];

  for (let i = 0; i < matrixLength; i++) {
    const rowLength = matrix[i].length;
    const upIdx = i - 1;
    const downIdx = i + 1;
    
    for (let j = 0; j < rowLength; j++) {
      const leftIdx = j - 1;
      const rightIdx = j + 1;
      
      
      if (isValid(upIdx, matrixLength)) {
       
        if (matrix[upIdx][j] === matrix[i][j]) {
          
          cords.push([upIdx, j, i, j])
        }
      }
      
      if (isValid(downIdx, matrixLength)) {
          
        if (matrix[downIdx][j] === matrix[i][j]) {
          cords.push([downIdx, j, i, j])
        }
      }
      
      if (isValid(leftIdx, rowLength)) {
        if (matrix[i][leftIdx] === matrix[i][j]) {
          cords.push([i, leftIdx, i, j])
        }
      }
      
      if (isValid(rightIdx, rowLength)) {
        if (matrix[i][rightIdx] === matrix[i][j]) {
          cords.push([i, rightIdx, i, j])
        }
      }
    }
  }
  console.log(cords);
  
  function isValid(idx, len) {
    return idx >= 0 && idx < len;
  }

}
