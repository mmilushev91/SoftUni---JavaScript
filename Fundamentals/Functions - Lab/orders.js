function solve(beverage, quantity) {
  const beveragePrice = {
    "coffee": 1.50,
    "water": 1.00,
    "coke": 1.40,
    "snacks": 2.00,
  }
  
  const price = beveragePrice[beverage] * quantity;
  console.log(price.toFixed(2));
}
