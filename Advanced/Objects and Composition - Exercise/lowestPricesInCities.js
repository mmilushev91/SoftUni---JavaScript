function solve(data) {
  const productsData = createProductsObj(data);
  const minPrice = findMinPrice(productsData);
  printResult(minPrice);
  
  //1.loop through data and create obj with nested obj (Product: {city: value...})
  function createProductsObj(arr) {
    const obj = {};
    for (const line of arr) {
      const [town, product, price] = line.split(" | ");
      
      const cityObj = {};
      cityObj[town] = Number(price)
      
      if (obj[product]) {
        obj[product] = {...obj[product], ...cityObj}
      } else {
        obj[product] = cityObj;
        
      }
    }
    
    return obj;
  }
  //2.loop through every product obj and find min value for the product
  function findMinPrice(obj) {
    const minValues = {}
    for (const product in obj) {
      let minValue = Number.MAX_VALUE;
      let town = "";
      
      for (const city in obj[product]) {
        const currentValue = obj[product][city];
   
        if (currentValue < minValue) {
          minValue = currentValue;
          town = city;
        }
      }
      //3. Add to new obj: Orange -> 2 (Sample Town)
      const townObj = {};
      townObj[town] = minValue
      minValues[product] = townObj;
      
    }
    
    return minValues;
    
  }
  //4.Print the result
  function printResult(obj) {
    for (const product in obj) {
      const [town, price] = Object.entries(obj[product])[0];
      console.log(`${product} -> ${price} (${town})`)
    }
  }
}
