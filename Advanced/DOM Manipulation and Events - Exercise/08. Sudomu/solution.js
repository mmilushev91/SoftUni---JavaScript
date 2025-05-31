function solve() {
  const inputs = Array.from(document.getElementsByTagName("input"));
  const [checkBtn, clearBtn] = document.getElementsByTagName("button");
  const table = document.querySelector("table");
  const paragraph = document.querySelector("p");

  checkBtn.addEventListener("click", function () {
    let j = 0;
    for (let i = 0; i < 9; i += 3) {
      const rowSum = calcSum(inputs.slice(i, i + 3));
      const colSum = calcSum([inputs[j], inputs[j + 3], inputs[j + 6]]);

      if (rowSum !== 6 || colSum !== 6) {
        notSolved();
        break;
      }

      solved();
      j++;
    }
  });

  clearBtn.addEventListener("click", reset);

  function calcSum(arr) {
    return arr.reduce((acc, el) => acc + Number(el.value), 0);
  }

  function solved() {
    table.style.border = "2px solid green";
    paragraph.textContent = "You solve it! Congratulations!";
    paragraph.style.color = "green";
  }

  function notSolved() {
    table.style.border = "2px solid red";
    paragraph.textContent = "NOP! You are not done yet...";
    paragraph.style.color = "red";
  }

  function reset() {
    table.style.border = "none";
    paragraph.textContent = "";
    inputs.forEach((input) => (input.value = ""));
  }
}
