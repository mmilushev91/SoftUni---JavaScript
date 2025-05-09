function solve(matrix) {
  const singleArray = matrix.flat();
  return Math.max(...singleArray);
}
