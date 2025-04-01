function solve(n) {
  let oddNum = 1;
  let oddSum = 0;
  for (let i = 0; i < n; i++) {
    console.log(oddNum);
    
    oddSum += oddNum;
    oddNum += 2;
  }
  
  console.log(`Sum: ${oddSum}`)
}
