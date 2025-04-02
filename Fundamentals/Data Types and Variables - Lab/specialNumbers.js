function solve(n) {
  let sum, isSpecial, currentResult;
  const specialSums = [5, 7, 11]
  
  for (let i = 1; i <= n; i++) {
    sum = String(i).split("").reduce((sum, el) => sum + Number(el), 0);
    currentResult = specialSums.includes(sum) ? "True" : "False";
    console.log(`${i} -> ${currentResult}`);
  }
}
