function solve() {
  const taskInputEl = document.getElementById("task");
  const descriptionEl = document.getElementById("description");
  const dateEl = document.getElementById("date");
  const addBtn = document.getElementById("add");
  const sections = Array.from(document.getElementsByTagName("section")).slice(1);
  const openField = sections[0].children[1];
  const progressField = sections[1].children[1];
  const completedField = sections[2].children[1];


addBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (!taskInputEl.value || !descriptionEl.value || !dateEl.value) {
    console.log("empty");
    return;
  }

  const newTask = createNewTask(
    `${taskInputEl.value}`,
    `Description: ${descriptionEl.value}`,
    `Due Date: ${dateEl.value}`
  );
  openField.appendChild(newTask);

  const [btn1, btn2] = newTask.getElementsByTagName("button");

  const removeTask = () => newTask.remove();

  const finishTask = () => {
    newTask.querySelector(".flex").remove();
    completedField.appendChild(newTask);
  };

  const changeBtns = () => {
    progressField.appendChild(newTask);
    styleBtn("green", "red", "Delete", btn1);
    styleBtn("red", "orange", "Finish", btn2);

    btn1.removeEventListener("click", changeBtns);
    btn2.removeEventListener("click", removeTask);

    btn1.addEventListener("click", removeTask);
    btn2.addEventListener("click", finishTask);
  };

    btn1.addEventListener("click", changeBtns);
    btn2.addEventListener("click", removeTask);
  
    // Clear inputs
    taskInputEl.value = descriptionEl.value = dateEl.value = "";
});
  
  function changeBtns() {
    progressField.appendChild(newTask);
    styleBtn("green", "red", "Delete", btn1);
    styleBtn("red", "orange", "Finish", btn2);
    btn1.removeEventListener("click", changeBtns);
    btn2.removeEventListener("click", removeTask);
    
    btn1.addEventListener("click", removeTask);
    btn2.addEventListener("click", function() {
      newTask.getElementsByClassName("flex")[0].remove();
      
      completedField.appendChild(newTask);
    })
  }
  
  function removeTask() {
    newTask.remove();
  }
  
  function styleBtn(class1, class2, text, btn) {
    btn.classList.remove(class1);
    btn.classList.add(class2);
    btn.textContent = text;
  }
  
  function styleFinishBtn() {
    redBtn.classList.remove("red");
    redBtn.classList.add("orange");
    redBtn.textContent = "Finish";
  }
  
  
  function createNewTask(h3Text, p1Text, p2Text) {
    const articleEl = document.createElement("article");
    const h3El = document.createElement("h3");
    h3El.textContent = h3Text;
    articleEl.appendChild(h3El);
    
    const firstParagraph = document.createElement("p");
    const secondParagraph = document.createElement("p");
    firstParagraph.textContent = p1Text;
    secondParagraph.textContent = p2Text;
    articleEl.appendChild(firstParagraph);
    articleEl.appendChild(secondParagraph);
    
    const div = document.createElement("div");
    div.classList.add("flex");
    
    const greenBtn = document.createElement("button");
    greenBtn.classList.add("green");
    greenBtn.textContent = "Start";
    
    const redBtn = document.createElement("button");
    redBtn.classList.add("red");
    redBtn.textContent = "Delete";
    
    div.appendChild(greenBtn);
    div.appendChild(redBtn);
    articleEl.appendChild(div);
    
    return articleEl;
  }
    
}


