function focused() {
  const inputElements = document.getElementsByTagName("input");

  for (const inputEl of inputElements) {
    inputEl.addEventListener("focus", function () {
      this.parentElement.classList.add("focused");
    });

    inputEl.addEventListener("blur", function () {
      this.parentElement.classList.remove("focused");
    });
  }
}
