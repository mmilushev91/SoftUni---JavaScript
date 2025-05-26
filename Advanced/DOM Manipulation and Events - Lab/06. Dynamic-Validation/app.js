function validate() {
  const regex = /([a-z]+@[a-z]+\.[a-z]+)/gm;
  const inputEl = document.getElementById("email");

  inputEl.addEventListener("change", function () {
    const inputValue = inputEl.value;

    if (!regex.test(inputValue)) {
      inputEl.classList.add("error");
    } else {
      inputEl.classList.remove("error");
    }
  });
}
