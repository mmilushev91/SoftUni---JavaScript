function extractText() {
  const liElements = document.querySelectorAll("li");
  const textAreaEl = document.getElementById("result");
  for (const el of liElements) {
    textAreaEl.value += el.textContent + "\n";
  }
}
