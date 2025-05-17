function toggle() {
  const extra = document.getElementById("extra");
  const button = document.getElementsByClassName("button")[0];

  if (button.textContent === "More") {
    console.log("clicked");
    extra.style.display = "block";
    button.textContent = "Less";
  } else {
    extra.style.display = "none";
    button.textContent = "More";
  }
}
