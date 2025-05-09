function solve(arr) {
  const result = arr.filter((a, idx) => idx % 2 !== 0).map(el => el * 2).reverse().join(" ");
  return result;
}
