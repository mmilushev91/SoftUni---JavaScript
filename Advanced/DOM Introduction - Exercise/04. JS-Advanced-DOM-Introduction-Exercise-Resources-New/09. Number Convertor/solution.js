function solve() {
  //Variables
  const inputEl = document.getElementById("input");
  const selectEl = document.getElementById("selectMenuTo");
  const buttonEl = document.getElementsByTagName("button")[0]
  const secondOptionEl = document.getElementsByTagName("option")[1]
  const thirdOptionEl = createOptionEl();
  const resultEl = document.getElementById("result");
  
  //insert Binary and Hexadecimal options to To select
  secondOptionEl.value = "binary";
  secondOptionEl.textContent = "Binary";
  selectEl.appendChild(thirdOptionEl);

  //listen for button clicks
  buttonEl.addEventListener("click", function() {
    const number = Number(inputEl.value);
    
    if (secondOptionEl.selected) {
      resultEl.value = decimalToBinary(number);
    } else {
      resultEl.value = decimalToHex(number)
    }
    
  })
  //Create function for decimalToBinary
  function decimalToBinary (num){
    return num.toString(2);
  } 
  
  //Create function for decimalToHex
  function decimalToHex(num){
    return num.toString(16).toUpperCase();
  }    
  //create function for new option element:
  //-add it to select el
  //-set its value to hexadecimal
  //-set its textcontent Hexadecimal
  function createOptionEl() {
    const optionEl = document.createElement("option");
    optionEl.value = "hexadecimal";
    optionEl.textContent = "Hexadecimal";
    return optionEl;
  }
}
