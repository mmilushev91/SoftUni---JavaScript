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
    products.sort()
    console.log(letter)
    
    const productsLength = products.length;
    
    for (let i = 0; i < productsLength; i++) {
      console.log(`  ${products[i][0]}: ${products[i][1]}`)
    } 
  }
}
