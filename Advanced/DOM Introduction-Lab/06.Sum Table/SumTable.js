function sumTable() {
  //select td elements and store them in collection
  const tdElements = document.querySelectorAll("td");
  //select sum el
  const sumEl = document.getElementById("sum");
  //loop through the elements and sum textContent at odd positions
  const loopEnd = tdElements.length - 1;
  let sum = 0;
  for (let i = 1; i < loopEnd; i += 2) {
    console.log(tdElements[i].textContent);
    sum += Number(tdElements[i].textContent);
  }
  //replace text of sum el with sum of the odd positions
  sumEl.textContent = sum;
}
