function solve(arr) {
  arr.sort((a, b) => a - b);
  const midIndex = arr.length / 2;
  
  return arr.slice(midIndex)
}
