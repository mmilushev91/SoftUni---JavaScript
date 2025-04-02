function solve(input) {
  const inputType = typeof input;
  console.log(inputType);

  if (inputType === "string" || inputType === "number") {
    console.log(input);
    return;
  }
  console.log("Parameter is not suitable for printing");
}

solve("Hello, JavaScript!");
solve(18);
solve(null);
