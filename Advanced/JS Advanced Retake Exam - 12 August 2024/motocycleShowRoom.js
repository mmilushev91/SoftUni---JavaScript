function solve() {
  //inputs
  const color = document.getElementById("colors");
  const motorcycles = document.getElementById("motorcycles");
  const datetime = document.getElementById("datetime")
  const fullName = document.getElementById("full-name");
  const email = document.getElementById("email");
  
  
  const testRideBtn = document.getElementById("test-ride-btn");
  
  const previewList = document.getElementById("preview-list");
  
  testRideBtn.addEventListener("click", rideBtnFunc);
  
  function rideBtnFunc() {
    
    if (!color.value || !motorcycles.value || !datetime.value
        || !fullName.value || !email.value) {
      return;    
    }
    
    const li = createLi(color.value, motorcycles.value, fullName.value, email.value, datetime.value);
    previewList.appendChild(li);
    
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
    
    function createBtns(className, text) {
      const button = document.createElement("button");
      button.classList.add(className);
      button.textContent = text;
      
      return button;
    }
  }
}

solve();
