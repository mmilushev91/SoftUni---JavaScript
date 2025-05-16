function solve(data) {
  
  const operations = {
    "+": (num1, num2) => num1 + num2,
    "-": (num1, num2) => num1 - num2,
    "*": (num1, num2) => num1 * num2,
    "/": (num1, num2) => num1 / num2,
  }
  
  const numbers = [];
  let notEnoughOperands = false;
  
  //loop through data
  for (const item of data) {
    //check for item type
    if (typeof item === "number") {
      //added it to number Array
      numbers.push(item);
      
    } else {
      // check for presence of two numbers
      if (numbers.length >= 2) {
        //if true perform the operation with popped numbers
        //push the result into the numbers Array
        notEnoughOperands = false;
        const num1 = numbers.pop();
        const num2 = numbers.pop();
        numbers.push(operations[item](num2, num1));
      } else {
        //else print error
        notEnoughOperands = true;
        console.log("Error: not enough operands!");
      }
    }
  }

  //if one number print it
  if (numbers.length === 1 && !notEnoughOperands) {
    console.log(...numbers);
  } else if (numbers.length > 1) {
  //else print error
    console.log("Error: too many operands!");
  }
}
