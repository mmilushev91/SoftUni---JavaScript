function solve(matrix) {
  const field = matrix.map(arr => arr.split(" ").map(Number));

  const fieldLength = field.length;
  let leftDiagonal = rightDiagonal = 0;
  const cords = [];
  
  for (let i = 0; i < fieldLength; i++) {
    const rightIndx = fieldLength - 1 - i;
    leftDiagonal += field[i][i];
    rightDiagonal += field[i][rightIndx];
    cords.push([i, i], [i, rightIndx])
  }
  
  if (leftDiagonal === rightDiagonal) {
    
    for (let i = 0; i < fieldLength; i++) {
       for (let j = 0; j < fieldLength; j++) {
         let isDiagonal = false
         
         for (const cord of cords) {
           const [row, col] = cord;
           
           if (row === i && col === j) {
             isDiagonal = true;
             break
           }
         }
         
         if (!isDiagonal) {
           field[i][j] = leftDiagonal;
         }
       }
    }
  }
  
  field.forEach(line => console.log(line.join(" ")));
}
