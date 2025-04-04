function solve(arr) {
  const arrLength = arr.length;
  let largestSeq = [];
  
  for (let i = 0; i < arrLength; i++) {
    let currentSeq = [arr[i]]; 
    
    for (let j = i + 1; j < arrLength; j++) {
      if (arr[j] !== arr[i]) {
        break;
      }
      
      currentSeq.push(arr[j]);
    }
    
    if (currentSeq.length > largestSeq.length) {
      largestSeq = currentSeq;
    }
  }
  
  console.log(largestSeq.join(" "));
}
