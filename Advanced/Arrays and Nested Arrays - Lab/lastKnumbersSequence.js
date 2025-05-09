function solve(arraySize, seqSize) {
  const arr = [1];
  
  for (let i = 1; i < arraySize; i++) {
    const startIdx = i-seqSize < 0 ? 0 : i-seqSize;
    const numToAdded = arr.slice(startIdx, i).reduce((sum, num) => sum + num);
    arr.push(numToAdded)
  }
  return arr;
}
