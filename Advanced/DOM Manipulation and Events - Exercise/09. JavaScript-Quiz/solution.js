function solve() {
  const sections = document.getElementsByTagName("section");
  const results = document.getElementById("results");
  const correctAnswers = [
    "onclick",
    "JSON.stringify()",
    "A programming API for HTML and XML documents",
  ];
  let correctAnswersCounter = 0;

  for (let i = 0; i < sections.length; i++) {
    const currentSection = sections[i];
    const answers = currentSection.getElementsByClassName("answer-text");

    for (const answer of answers) {
      answer.addEventListener("click", function (e) {
        if (e.currentTarget.textContent === correctAnswers[i]) {
          correctAnswersCounter++;
        }
        currentSection.style.display = "none";
        if (i < 2) {
          sections[i + 1].style.display = "block";
        } else {
          const resultsMessage =
            correctAnswersCounter === 3
              ? "You are recognized as top JavaScript fan!"
              : `You have ${correctAnswersCounter} right answers`;

          results.style.display = "block";
          console.log(resultsMessage);
          results.querySelector("h1").textContent = resultsMessage;
        }
      });
    }
  }
}
