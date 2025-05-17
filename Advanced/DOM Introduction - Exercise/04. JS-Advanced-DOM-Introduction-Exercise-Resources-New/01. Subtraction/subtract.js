function subtract() {
  const firstNumber = document.getElementById("firstNumber");
  const secondNumber = document.getElementById("secondNumber");
  const result = document.getElementById("result");
  const output = Number(firstNumber.value) - Number(secondNumber.value);
  result.textContent = output;
  console.log(result);
  console.log("TODO:...");
}
