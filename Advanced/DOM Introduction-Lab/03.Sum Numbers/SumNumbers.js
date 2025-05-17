function calc() {
  const num1El = document.getElementById("num1");
  const num2El = document.getElementById("num2");
  const sumEl = document.getElementById("sum");
  const sum = Number(num1El.value) + Number(num2El.value);
  sumEl.value = sum;
}
