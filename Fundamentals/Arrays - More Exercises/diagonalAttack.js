function solve(arr) {
  const arrLength = arr.length;
  const field = arr.map(row => row.split(" ").map(el => Number(el)));
  let left = right = rightIndex = 0;
  const rightIndexes = [];
  const leftIndexes = [];
  
  for (let i = 0; i < arrLength; i++) {
    rightIndex = arrLength - 1 - i
    right += field[i][i];
    left += field[rightIndex][i];
    leftIndexes.push([i, i]);
    rightIndexes.push([rightIndex, i]);
  }

  if (left === right) {
    for (let i = 0; i < arrLength; i++) {
      
      for (let j = 0; j < field[i].length; j++) {
        
        if (!leftIndexes.some(item => JSON.stringify(item) === JSON.stringify([i, j]))
        && !rightIndexes.some(item => JSON.stringify(item) === JSON.stringify([j, i]))) {
          field[i][j] = left;
        };
        
      }
    }
      
  }
  
  field.forEach(row => console.log(row.join(" ")));
}
