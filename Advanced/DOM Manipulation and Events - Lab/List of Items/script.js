function addItem() {
    //select ul el
    //select input el 
    //create li el 
    //change li el textcontent to input el value
    //append li el to ul el
    
    const ulEl = document.getElementById("items");
    const inputEl = document.getElementById("newItemText");
    const newLiEl = document.createElement("li");
    newLiEl.textContent = inputEl.value;
    inputEl.value = "";
    ulEl.appendChild(newLiEl);
}
