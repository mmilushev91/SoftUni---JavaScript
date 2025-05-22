function addItem() {
    //target elements
    const ulEl = document.querySelector("ul");
    const [inputTextEl, inputButtonEl] = document.querySelectorAll("input");
    //create Li Element
    const LiEl = createLiElement();
    //append it to ulEl
    ulEl.appendChild(LiEl);
    const liElements = ulEl.children;
    
    for (const li of liElements) {
      const currAnchorElement = li.children[0];
      
      currAnchorElement.addEventListener("click", function() {
        li.remove();
      })
    }
    
   
   function createLiElement() {
     const LiEl = document.createElement("li");
     LiEl.textContent = inputTextEl.value;
     inputTextEl.value = "";
     const aEl = document.createElement("a");
     aEl.href = "#";
     aEl.textContent = "[Delete]";
     LiEl.appendChild(aEl);
     
     return LiEl;
   }
}
