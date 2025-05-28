function solve(arr) {

  const arrMap = new Map();
  for (const item of arr) {
    
    const [brand, model, quantity] = item.split(" | ");
    
    if (!arrMap.has(brand)) {
      arrMap.set(brand, new Map());
    }
    
    if (!arrMap.get(brand).has(model)) {
      arrMap.get(brand).set(model, 0)
    }
    arrMap.get(brand).set(model, arrMap.get(brand).get(model) + Number(quantity))

  }
  
  for (const [key, value] of arrMap.entries()) {
    console.log(key);
    
    for (const [k, v] of value.entries()) {
      console.log(`###${k} -> ${v}`)
    }
    
  }
  
}
