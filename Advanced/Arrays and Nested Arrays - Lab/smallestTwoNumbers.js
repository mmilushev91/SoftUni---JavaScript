function solve(arr) {
  let smallestNumbers = [];
  
  while (smallestNumbers.length < 2) {
    const smallestNumber = Math.min(...arr);
    const smallestNumberIdx = arr.indexOf(smallestNumber);
    arr.splice(smallestNumberIdx, 1);
    smallestNumbers.push(smallestNumber);
  }
  console.log(smallestNumbers.join(" "));
}
