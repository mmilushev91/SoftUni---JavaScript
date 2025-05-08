function solve(num1, num2) {
  const smallestNum1 = Math.min(num1, num2);
  let biggestDivider = Number.MIN_VALUE;
  
  for (let i = 1; i <= smallestNum1; i++) {
    
    if (num1 % i === 0 && num2 % i === 0 & i > biggestDivider) {
      biggestDivider = i;
    }
  }
  
  console.log(biggestDivider);
}
