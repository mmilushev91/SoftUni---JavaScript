function solve(arr, startString, endString) {
  const startIdx = arr.indexOf(startString);
  const endIdx = arr.indexOf(endString);
  return arr.slice(startIdx, endIdx + 1);
}
