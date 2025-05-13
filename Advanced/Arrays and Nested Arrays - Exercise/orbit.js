function solve(data) {
  const [height, width, x, y] = data;
  
  const matrix = Array.from({ length: height }, () => Array(width).fill(0));
  matrix[x][y] = 1;

  let level = 2;
  let filled = true;

  while (filled) {
    filled = false;
    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
        if (matrix[row][col] === level - 1) {
            // Check all 8 directions
          for (let dr = -1; dr <= 1; dr++) {
              for (let dc = -1; dc <= 1; dc++) {
                  const newRow = row + dr;
                  const newCol = col + dc;
                  if (
                      newRow >= 0 && newRow < height &&
                      newCol >= 0 && newCol < width &&
                      matrix[newRow][newCol] === 0
                      ) {
                          matrix[newRow][newCol] = level;
                          filled = true;
                        }
                  }
                }
              }
          }
      }
    level++;
  }

    // Print matrix
    matrix.forEach(row => console.log(row.join(' ')));
}
