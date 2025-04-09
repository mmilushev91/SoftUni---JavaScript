function solve(num1, num2, num3) {
  function sum() {
    return num1 + num2;
  }
  
  function subtract() {
    return sum() - num3;
  }
  
  console.log(subtract())
}
