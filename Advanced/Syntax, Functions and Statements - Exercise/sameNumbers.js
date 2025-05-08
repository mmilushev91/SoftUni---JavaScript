function solve(num) {
  const numString = String(num);
  const uniqueDigits = new Set(numString);
  
  console.log(uniqueDigits.size === 1)
  
  const numStringArray = numString.split("").reduce((sum, el) => sum + Number(el), 0);
  console.log(numStringArray)
}
