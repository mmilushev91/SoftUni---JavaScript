function solve(start, end) {
  let output = "";
  let sum = 0;
  
  for (let i = start; i <= end; i++) {
    output += i + " ";
    sum += i;
  }
  console.log(output);
  console.log(`Sum: ${sum}`)
}
