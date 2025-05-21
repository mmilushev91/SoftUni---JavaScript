function solve(funcLib, orders) {
  const products = orders.reduce((newObjects, obj) => {
    const productName = obj.template.name;
    const functions = obj.parts;
    
    const product = {
      name: productName,
    }
    
    for (const func of functions) {
      product[func] = funcLib[func];
    }
    
    newObjects.push(product);
    return newObjects;
  }, []);
  
  return products;

}
