function deleteByEmail() {
    //select td, input, resultDiv elements
    //turn td in array and filter even indexes;
    //loop through td array
    //if td.textcontent === input.value delete parent tr 
      //set div message to deleted
    //else div message to error
    
  const tdElements = document.getElementsByTagName("td");
  const inputEl = document.querySelector("input");
  const resultEl = document.getElementById("result");
  
  const tdElementsArr = [...tdElements].filter((el, i) => i % 2 !== 0)
  const inputElValue = inputEl.value;
  
  for (const el of tdElementsArr) {
    if (el.textContent === inputElValue) {
      const parentEl = el.parentElement;
      parentEl.remove();
      resultEl.textContent = "Deleted.";
      return;
    } 
  }
  
  resultEl.textContent = "Not found.";
  
}
