function solve(fruit, weight, pricePerKg) {
  const weightKg = weight / 1000;
  console.log(`I need $${(weightKg * pricePerKg).toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`)
}
