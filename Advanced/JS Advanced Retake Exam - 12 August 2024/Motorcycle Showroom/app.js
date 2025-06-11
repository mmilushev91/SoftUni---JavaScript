function solve() {
  //inputs
  const color = document.getElementById("colors");
  const motorcycles = document.getElementById("motorcycles");
  const datetime = document.getElementById("datetime")
  const fullName = document.getElementById("full-name");
  const email = document.getElementById("email");
  
  
  const testRideBtn = document.getElementById("test-ride-btn");
  
  const previewList = document.getElementById("preview-list");
  const completeList = document.getElementById("complete-list");
   
  testRideBtn.addEventListener("click", rideBtnFunc);
  
  function rideBtnFunc() {
    
    if (!color.value || !motorcycles.value || !datetime.value
        || !fullName.value || !email.value) {
      return;    
    }
    
    const li = createLi(color.value, motorcycles.value, fullName.value, email.value, datetime.value);
    previewList.appendChild(li);
    color.value = motorcycles.value = datetime.value = fullName.value = email.value = "";
    testRideBtn.removeEventListener("click", rideBtnFunc);
    
    const [editBtn, nextBtn] = li.getElementsByTagName("button");
    
    editBtn.addEventListener("click", function() {
      const paragraphs = li.getElementsByTagName("p");
      const inputs = [color, motorcycles, fullName, email, datetime];
      
      for (let i = 0; i < paragraphs.length; i++) {
        inputs[i].value = paragraphs[i].textContent.split(": ")[1];
      }
      
      li.remove();
      testRideBtn.addEventListener("click", rideBtnFunc);
    });
    
    nextBtn.addEventListener("click", function() {
      li.querySelector("div").remove();
      const completeBtn = createBtns("complete-btn", "Complete");
    
      li.appendChild(completeBtn);
      
      completeList.appendChild(li);
      
      completeBtn.addEventListener("click", function() {
        li.remove();
        
        const confirmBtn = createConfirmedBtn();
        document.querySelector(".complete").appendChild(confirmBtn);
        
        confirmBtn.addEventListener("click", function() {
          location.reload();
        })
      })
      
    })
    
  }
  
  function createLi(...args) {
    const labels = ["Color", "Model", "For", "Contact", "Test Ride On"];
    const li = document.createElement("li");
    const article = document.createElement("article");
    
    for (let i = 0; i < args.length; i++) {
      const p = document.createElement("p");
      p.textContent = `${labels[i]}: ${args[i]}`;
      article.appendChild(p);
    }
    
    li.appendChild(article);
    
    const div = document.createElement("div");
    div.classList.add("btn-container");
    
    const editBtn = createBtns("edit-btn", "Edit");
    const nextBtn = createBtns("next-btn", "Next");
    
    div.appendChild(editBtn);
    div.appendChild(nextBtn);
    
    li.appendChild(div);
    
    return li;
  }
  
  function createBtns(className, text) {
    const button = document.createElement("button");
    button.classList.add(className);
    button.textContent = text;
      
    return button;
  }
  
  function createConfirmedBtn() {
    const viewDiv = createConfirmedDiv("data-view");
    const previewDiv = createConfirmedDiv("preview");
    const completeDiv = createConfirmedDiv("complete");
    const confirmBtn = createBtns("confirm-btn", "Your Test Drive is Confirmed");
    
    viewDiv.appendChild(previewDiv);
    viewDiv.appendChild(completeDiv);
    viewDiv.appendChild(confirmBtn);
    
    return viewDiv;
  }
  
  function createConfirmedDiv(className) {
    const div = document.createElement("div");
    div.classList.add(className);
    return div;
  }
}
