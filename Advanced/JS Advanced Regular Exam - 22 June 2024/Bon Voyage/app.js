function solve() {
  const inputFields = document.getElementsByTagName("input");
  const [firstNameEl, lastNameEl, fromDate, toDate] = inputFields;
  const nextButton = document.getElementById("next-btn");
  
  const infoList = document.querySelector(".info-list");
  const confirmList = document.querySelector(".confirm-list");
  
  const status = document.getElementById("status");
  
  nextButton.addEventListener("click", nextButtonFunc);
  status.addEventListener("click", () => location.reload());
  
  // Handle Next Button click
  function nextButtonFunc(e) {
    e.preventDefault();
    
    // Validate inputs and dates before proceeding
    if (!validateInputs() || !validateDate()) {
      return;
    }
    
    // Create a new list item and append to infoList
    const li = createLi();
    infoList.appendChild(li);
    
    // Clear input fields after adding to the list
    clearInputFields();
    
    // Disable next button and remove event listener
    nextButton.removeEventListener("click", nextButtonFunc);
    
    // Get edit and continue buttons from the created list item
    const [editBtn, continueBtn] = li.getElementsByTagName("button");
    
    // Add event listeners for edit and continue buttons
    editBtn.addEventListener("click", () => editBtnFunc(li));
    continueBtn.addEventListener("click", () => continueBtnFunc(li));
  }
  
  // Function to handle Continue button click
  function continueBtnFunc(li) {
    // Get all buttons in the li element and remove them
    const buttons = Array.from(li.getElementsByTagName("button"));
    buttons.forEach(button => button.remove());
    
    // Create new "Confirm" and "Cancel" buttons
    const confirmBtn = createBtn("confirm-btn", "Confirm");
    const cancelBtn = createBtn("cancel-btn", "Cancel");
    
    // Append new buttons to the list item
    li.appendChild(confirmBtn);
    li.appendChild(cancelBtn);
    
    // Append the list item to the confirm list
    confirmList.appendChild(li);
    
    // Event listener for Confirm button
    confirmBtn.addEventListener("click", function() {
      validateRequest("vacation-confirmed", "Vacation Requested");
    });
    
    // Event listener for Cancel button
    cancelBtn.addEventListener("click", function() {
      validateRequest("vacation-canceled", "Cancelled Vacation");
    });
    
    // Function to handle request validation and status update
    function validateRequest(className, text) {
      li.remove();
      nextButton.addEventListener("click", nextButtonFunc);
      status.classList.add(className);
      status.textContent = text;
    }
  }
  
  // Function to handle Edit button click
  function editBtnFunc(li) {
    const articleChildren = li.querySelector("article").children;
    let firstName, lastName, fromDateValue, toDateValue;
    
    // Extract values from the list item
    firstName = articleChildren[0].textContent.split(": ")[1].split(" ")[0];
    lastName = articleChildren[0].textContent.split(": ")[1].split(" ")[1];
    fromDateValue = articleChildren[1].textContent.split(": ")[1];
    toDateValue = articleChildren[2].textContent.split(": ")[1];
    
    // Set the input fields with the extracted values
    firstNameEl.value = firstName;
    lastNameEl.value = lastName;
    fromDate.value = fromDateValue;
    toDate.value = toDateValue;
    
    // Remove the list item after editing
    li.remove();
    
    // Re-enable the Next button and add event listener
    nextButton.addEventListener("click", nextButtonFunc);
  }
  
  // Function to create a new list item for vacation info
  function createLi() {
    const pText = [`From date: ${fromDate.value}`, `To date: ${toDate.value}`];
    const li = document.createElement("li");
    li.classList.add("vacation-content");
    
    const article = document.createElement("article");
    
    const h3 = document.createElement("h3");
    h3.textContent = `Name: ${firstNameEl.value} ${lastNameEl.value}`;
    
    article.appendChild(h3);
    
    // Add "From" and "To" date information
    for (const text of pText) {
      const p = document.createElement("p");
      p.textContent = text;
      article.appendChild(p);
    }
    
    li.appendChild(article);
    
    // Create "Edit" and "Continue" buttons
    const editBtn = createBtn("edit-btn", "Edit");
    const continueBtn = createBtn("continue-btn", "Continue");
    
    li.appendChild(editBtn);
    li.appendChild(continueBtn);
    
    return li;
  }
  
  // Helper function to create buttons
  function createBtn(className, text) {
    const btn = document.createElement("button");
    btn.classList.add(className);
    btn.textContent = text;
    return btn;
  }
  
  // Function to clear input fields
  function clearInputFields() {
    for (const input of inputFields) {
      input.value = "";
    }
  }
  
  // Function to validate the date range
  function validateDate() {
    const date1 = new Date(fromDate.value);
    const date2 = new Date(toDate.value);
    
    // Ensure the "from" date is strictly before the "to" date
    if (date1 < date2) {
      return true;
    }
    
    return false;
  }
  
  // Function to validate if all inputs are filled
  function validateInputs() {
    for (const input of inputFields) {
      if (!input.value) {
        return false;
      }
    }
    
    return true;
  }
}

solve();
