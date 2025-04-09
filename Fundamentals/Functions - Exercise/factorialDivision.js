function solve(num1, num2) {
  function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
  }
  const num1Factorial = factorial(num1);
  const num2Factorial = factorial(num2);
  console.log((num1Factorial / num2Factorial).toFixed(2));
}
