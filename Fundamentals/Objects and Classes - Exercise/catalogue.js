function solve(data) {
  const dataObj = {};
  
  for (const line of data) {
    const key = line[0];
    const [product, price] = line.split(" : ");
    
    if (!dataObj.hasOwnProperty(key)) {
      dataObj[key] = [];
    }
    dataObj[key].push([product, price]);
    
    
  }

  const sortedDateObj = Object.entries(dataObj).sort((a, b) => a[0].localeCompare(b[0]));
 
 
  for (const line of sortedDateObj) {
    const [letter, products] = line;
    console.log(letter);
    
    const productsLength = products.length;
    
    for (let i = 0; i < productsLength - 1; i+= 2) {
      console.log(` ${products[i]}: ${products[i+1]}`)
    }
    
    
  }
}
