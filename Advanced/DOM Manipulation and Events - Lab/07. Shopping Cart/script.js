function solve() {
  //select product titles, add buttons and prices
  //select textarea
  //select checkout button
  //create products arr
  //create total price var
  //loop thourgh buttons:
    //listen for button click
    //add product in products arr if not already inside
    //update textarea value
  //listen for checkout click
  //add the final line to the textarea
  //remove checkout and buttons addEventListeners
  
  const productTitles = document.getElementsByClassName("product-title");
  const addProducts = Array.from(document.getElementsByClassName("add-product"));
  const productsLinePrice = document.getElementsByClassName("product-line-price");
  const textAreaEl = document.querySelector("textarea");
  const checkout = document.querySelector(".checkout");
  const products = [];
  let totalPrice = 0;
  
  for (let i = 0; i < 3; i++) {
    const button = addProducts[i];
    
    
    button.addEventListener("click", addButtonFunc);
  }
  
  checkout.addEventListener("click", addFinalLine);
  
  function addButtonFunc(event) {
    const i = addProducts.indexOf(event.currentTarget);
    
    const productTitle = productTitles[i].textContent;
    const productLinePrice = Number(productsLinePrice[i].textContent);
      
    if (!products.includes(productTitle)) {
      products.push(productTitle);
    }
      
    totalPrice += productLinePrice;
    textAreaEl.value += `Added ${productTitle} for ${productLinePrice.toFixed(2)} to the cart.\n`
  }
  
  function addFinalLine() {
    textAreaEl.value += `You bought ${products.join(", ")} for ${totalPrice.toFixed(2)}.`
    removeButtonListeners();
    checkout.removeEventListener("click", addFinalLine)
  }
  
  function removeButtonListeners() {
    for (const btn of addProducts) {
      
      btn.removeEventListener("click", addButtonFunc);
    }
  }
}
