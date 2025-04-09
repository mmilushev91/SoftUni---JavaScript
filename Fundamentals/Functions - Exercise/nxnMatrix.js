function solve(num) {
  const matrix = Array(num).fill(Array(num).fill(num));
  matrix.forEach(row => console.log(row.join(" ")));
}
