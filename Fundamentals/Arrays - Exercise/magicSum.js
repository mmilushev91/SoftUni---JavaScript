function solve(arr, num) {
  const arrLength = arr.length;
  let magicPairs = [];
  
  for (let i = 0; i < arrLength; i++) {
    
    for (let j = i + 1; j < arrLength; j++) {
      if (arr[j] + arr[i] === num) {
        magicPairs.push([arr[i], arr[j]].join(" "));
      }
    }
  }
  console.log(magicPairs.join("\n"));
}
