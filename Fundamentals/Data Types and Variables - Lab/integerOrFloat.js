function solve(...numbers) {
  const sum = numbers.reduce((sum, el) => sum + el, 0);
  const sumType = sum % 1 > 0 ? "Float" : "Integer";
  
  console.log(`${sum} - ${sumType}`)
}
