function solve(data) {
  const info = new Map();
  const bottles = new Map();
  for (const line of data) {
    const [fruit, quantity] = line.split(" => ");
    if (!info.has(fruit)) {
      info.set(fruit, 0);
    }
    
    info.set(fruit, info.get(fruit) + Number(quantity));
    
    while (info.get(fruit) >= 1000) {
      info.set(fruit, info.get(fruit) - 1000)
      if (!bottles.has(fruit)) {
        bottles.set(fruit, 0);
      }
      
      bottles.set(fruit, bottles.get(fruit) + 1);
    }
    
  }
  
  for (const item of bottles) {
    const [fruit, quantity] = item;
      
    console.log(`${fruit} => ${quantity}`)
    
  }
}
