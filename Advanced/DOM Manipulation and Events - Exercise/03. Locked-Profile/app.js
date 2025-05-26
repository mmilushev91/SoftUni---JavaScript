function lockedProfile() {
  const profiles = Array.from(document.getElementsByClassName("profile"));
  console.log(profiles);

  for (const profile of profiles) {
    profile.addEventListener("change", function () {
      const unlock = this.getElementsByTagName("input")[1];
      const button = this.querySelector("button");

      if (unlock.checked) {
        button.addEventListener("click", buttonClick);
      } else {
        button.removeEventListener("click", buttonClick);
      }
    });
  }

  function buttonClick() {
    const divIndex = profiles.indexOf(this.parentElement);
    const hiddenField = document.getElementById(
      `user${divIndex + 1}HiddenFields`
    );

    if (!hiddenField.style.display) {
      hiddenField.style.display = "block";
      this.textContent = "Hide it";
    } else {
      hiddenField.style.display = "";
      this.textContent = "Show More";
    }
  }
}
