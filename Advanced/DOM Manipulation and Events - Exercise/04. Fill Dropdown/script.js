function addItem() {
  const selectEl = document.querySelector("select");
  const newItemText = document.getElementById("newItemText");
  const newItemValue = document.getElementById("newItemValue");
  
  const optionEl = document.createElement("option");
  optionEl.textContent = newItemText.value;
  optionEl.value = newItemValue.value;
  
  selectEl.appendChild(optionEl);
  newItemText.value = "";
  newItemValue.value = "";
}
