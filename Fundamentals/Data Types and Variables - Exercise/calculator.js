function calculator(num1, operator, num2) {
 let calculation = {
   "+": num1 + num2,
   "-": num1 - num2,
   "*": num1 * num2,
   "/": num1 / num2,
 }
 
 console.log(calculation[operator].toFixed(2));
 
}
