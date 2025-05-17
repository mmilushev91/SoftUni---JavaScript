function search() {
  const townsList = document.getElementById("towns").children;
  const searchedText = document.getElementById("searchText").value;
  const result = document.getElementById("result");
  if (!searchedText) return;
  let matches = 0;
  reset(townsList);

  for (const town of townsList) {
    if (town.textContent.includes(searchedText)) {
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
      matches++;
    }
  }

  result.textContent = `${matches} matches found`;

  function reset(towns) {
    result.textContent = "";
    for (const town of towns) {
      town.style.fontWeight = "normal";
      town.style.textDecoration = "none";
    }
  }
}
