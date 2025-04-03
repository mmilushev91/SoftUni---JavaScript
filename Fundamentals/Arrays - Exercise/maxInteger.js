function solve(arr) {
  const arrLength = arr.length;
  const topIntegers = [];
  
  for (let i = 0; i < arrLength; i++) {
    let isItTop = true;
    for (let j = i + 1; j <= arrLength - 1; j++) {
      if (arr[i] <= arr[j]) {
        isItTop = false;
        break
      }
    }
    
    if (isItTop) topIntegers.push(arr[i]);
  }
  
  console.log(topIntegers.join(" "));
}
