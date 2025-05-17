function solve() {
  //variables
  //elements
  //store input text value to variable
  const textEl = document.getElementById("text");
  //store input case as variable
  const namingConventionEl = document.getElementById("naming-convention");
  //target result el
  const resultEl = document.getElementById("result");
  //others
  const textArr = textEl.value.split(" ").map((el) => el.toLowerCase());
  const inputCase = namingConventionEl.value;

  //create obj with start index for each case
  const startIndexes = {
    "Camel Case": 1,
    "Pascal Case": 0,
  };

  if (!startIndexes.hasOwnProperty(inputCase)) {
    resultEl.textContent = "Error!";
    return;
  }

  const resultText = tranformText(textArr, startIndexes[inputCase]);
  //add tranform text to the result
  resultEl.textContent = resultText;

  function tranformText(textArr, startIndex) {
    const textArrLength = textArr.length;
    const newArr = [];

    if (startIndex === 1) {
      newArr.push(textArr[0]);
    }

    for (let i = startIndex; i < textArrLength; i++) {
      const currentEl = textArr[i];
      const newEl = currentEl[0].toUpperCase() + currentEl.slice(1);
      newArr.push(newEl);
    }

    return newArr.join("");
  }
}
