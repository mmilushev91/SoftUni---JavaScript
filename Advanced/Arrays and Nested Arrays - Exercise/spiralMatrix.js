function solve(rows, cols) {
  const matrix = Array.from({length: rows}, () => Array(cols).fill(0));
  let top = 0;
  let bottom = rows - 1;
  let left = 0;
  let right = cols - 1;
  let num = 1;
  
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num++;
    }
    
    top++;
  
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num++;
    }
    
    right--;
    
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = num++;
    }
    
    bottom--;
    
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = num++;
    }
    
    left++;
   
  }
  
  matrix.forEach(row => console.log(row.join(" ")));
 
}
