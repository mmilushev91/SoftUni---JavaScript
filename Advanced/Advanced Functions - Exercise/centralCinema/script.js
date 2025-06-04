function solve() {
  const [name, hall, price] = document.getElementsByTagName("input");
  const addBtn = document.querySelector("button"); // "On Screen" button
  const moviesList = document.querySelector("#movies ul");
  const archiveList = document.querySelector("#archive ul");
  const clearBtn = document.querySelector("#archive button"); // "Clear" button
    
  // Event listener for the "On Screen" button
  addBtn.addEventListener("click", function(e) {
    e.preventDefault();
    
    // Check if inputs are valid: all fields must be filled and price must be a valid number
    if (name.value.trim() && hall.value.trim() && price.value && !isNaN(Number(price.value)) && Number(price.value) > 0) {
      const li = createMovLiEl(name.value, hall.value, price.value);
      moviesList.appendChild(li); // Add to the "Movies on Screen" list
      name.value = hall.value = price.value = ""; // Clear the inputs
    }
  });
  
  // Event listener for clicking the "Archive" button (in the Movies on Screen list)
  moviesList.addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON") {
      const liEl = e.target.closest("li");
      const ticketsCount = Number(liEl.querySelector("input").value);
      console.log(ticketsCount)
      // Validate the "Tickets Sold" input (must be a positive number)
      if (!isNaN(ticketsCount) && ticketsCount >= 0) {
        const [hall, price] = liEl.getElementsByTagName("strong");
        const movieName = liEl.querySelector("span").textContent;
        const ticketsPrice = parseFloat(price.textContent);
        const totalPrice = (ticketsCount * ticketsPrice).toFixed(2); // Calculate total
        const hallName = hall.textContent.split(" ")[1];
        liEl.remove(); // Remove the movie from the "Movies on Screen" list
        
        const archLiEl = createArchiveLiEl(movieName, hallName, totalPrice);
        archiveList.appendChild(archLiEl); // Add to the Archive
      }
    }
  });
  
  // Event listener for clicking the "Delete" button in the archive section
  archiveList.addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON") {
      e.target.parentElement.remove(); // Remove archived movie
    }
  });
  
  // Event listener for the "Clear" button to remove all items in the archive
  clearBtn.addEventListener("click", function() {
    archiveList.replaceChildren(); // Clear the archive list
  });
  
  // Function to create a movie list item for the "Movies on Screen" section
  function createMovLiEl(name, hall, price) {
    const li = document.createElement("li");
    
    const spanEl = document.createElement("span");
    spanEl.textContent = name;
    li.appendChild(spanEl);
    
    const strongHallEl = document.createElement("strong");
    strongHallEl.textContent = `Hall: ${hall}`;
    li.appendChild(strongHallEl);
    
    const div = document.createElement("div");
    
    const strongPriceEl = document.createElement("strong");
    strongPriceEl.textContent = parseFloat(price).toFixed(2); // Format price
    div.appendChild(strongPriceEl);
    
    const inputEl = document.createElement("input");
    inputEl.placeholder = "Tickets Sold";
    div.appendChild(inputEl);
    
    const buttonEl = document.createElement("button");
    buttonEl.textContent = "Archive";
    div.appendChild(buttonEl);
    
    li.appendChild(div);
    
    return li;
  }
  
  // Function to create an archive list item
  function createArchiveLiEl(name, hall, price) {
    const li = document.createElement("li");
    
    const spanEl = document.createElement("span");
    spanEl.textContent = name;
    li.appendChild(spanEl);
    
    const strongPriceEl = document.createElement("strong");
    strongPriceEl.textContent = `Total amount: ${price}`; // Total price in archive
    li.appendChild(strongPriceEl);

    const buttonEl = document.createElement("button");
    buttonEl.textContent = "Delete";
    li.appendChild(buttonEl);
    
    return li;
  }
}
