function solve(arr) {
  const arrLength = arr.length;
  
  for (let i = 0; i < arrLength; i++) {
    let leftSum = rightSum = 0;
    let index = i - 1;
    
    while (index >= 0) {
      leftSum += arr[index];
      index--;
    }
    
    index = i + 1;
  
    while (index < arrLength) {
      rightSum += arr[index];
      index++;
    }
    
    if (leftSum === rightSum) {
      console.log(i);
      return;
    }
  }
  
  console.log("no");
}
