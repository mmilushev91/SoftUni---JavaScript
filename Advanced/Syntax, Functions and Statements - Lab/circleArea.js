function solve(input) {
  const inputType = typeof input;
  const output =
    inputType === "number"
      ? `${(Math.PI * input ** 2).toFixed(2)}`
      : `We can not calculate the circle area, because we receive a ${inputType}.`;
  console.log(output);
}
