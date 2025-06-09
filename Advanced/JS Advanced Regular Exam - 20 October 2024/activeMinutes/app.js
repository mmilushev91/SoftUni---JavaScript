function solve() {
  //Form Elements
  const activityType = document.getElementById("type");
  const intensity = document.getElementById("intensity");
  const calories = document.getElementById("calories");
  const durationInput = document.getElementById("duration");
  const date = document.getElementById("date");
  const addActivityBtn = document.getElementById("add-activity");
  
  //Data View
  const previewActivity = document.getElementById("preview-activity");
  const activitiesTable = document.getElementById("activities-table")
  //
  addActivityBtn.addEventListener("click", addActivity)
  
  
  function addActivity() {
    if (previewActivity.children.length > 0) return;
    if (!activityType.value || !intensity.value ||
      !calories.value || !durationInput.value || !date.value) {
        return;
      }
    
    const currentAct = createActivity()
    previewActivity.appendChild(currentAct);
    
    activityType.value = intensity.value = calories.value = durationInput.value = date.value = "";
    addActivityBtn.removeEventListener("click", addActivity);
    
    const [editBtn, nextBtn] = currentAct.getElementsByTagName("button");
    
    editBtn.addEventListener("click", function() {
      const paragraphs = currentAct.getElementsByTagName("p");
      const inputs = [activityType, intensity, durationInput, date, calories];
      
      for (let i = 0; i < 5; i++) {
        inputs[i].value = paragraphs[i].textContent;
      }
      currentAct.remove();
      addActivityBtn.addEventListener("click", addActivity);
    })
    nextBtn.addEventListener("click", function() {
      addActivityBtn.addEventListener("click", addActivity);
      const tr = createTableRow(currentAct);
      activitiesTable.appendChild(tr);
      currentAct.remove();
      
      const delBtn = tr.querySelector("button");
      delBtn.addEventListener("click", function() {
        tr.remove();
      })
    })
  } 
  
  
  function createActivity() {
    const li = document.createElement("li");
    const article = document.createElement("article");
    const pValues = [activityType.value, intensity.value, durationInput.value, date.value, calories.value];
    
    for (const value of pValues) {
      const p = document.createElement("p");
      p.textContent = value;
      article.appendChild(p);
    }
    
    li.appendChild(article);
    
    const div = document.createElement("div");
    div.classList.add("btn-container");
    
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";
    
    const nextBtn = document.createElement("button");
    nextBtn.classList.add("next-btn");
    nextBtn.textContent = "Next";
    
    div.appendChild(editBtn);
    div.appendChild(nextBtn)
    
    li.appendChild(div);
    
    return li;
  }
  function createTableRow(currentAct) {
    const paragraphs = currentAct.getElementsByTagName("p");
    const paragraphsArr = [paragraphs[0], paragraphs[2], paragraphs[4], paragraphs[3], paragraphs[1]];
    const classes = ["type-cell", "duration-cell", "calories-cell", "date-cell", "intensity-cell"]
    const tr = document.createElement("tr");
    
    for (let i = 0; i < 5; i++) {
      const td = document.createElement("td");
      td.classList.add(classes[i]);
      
      td.textContent = paragraphsArr[i].textContent;
      tr.appendChild(td)
    }
    
    const td = document.createElement("td");
    td.classList.add("btn-cell");
    const button = document.createElement("button");
    button.classList.add("delete-btn");
    button.textContent = "Delete";
    td.appendChild(button);
    tr.appendChild(td);
    
    return tr;
    
  }
}

solve();
