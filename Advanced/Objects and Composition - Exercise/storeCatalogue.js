function solve(data) {
  const storeCatalogue = createStoreCatalogue(data);
  const sortedLetterStoreCatalogue = sortByLetter(storeCatalogue);
  const sortedProducts = sortProducts(sortedLetterStoreCatalogue);
  printProducts(sortedProducts);
  
  //1. create object with nested object each named with uppercase letter, which includes
  //letters that start with that letter
  function createStoreCatalogue(arr) {
    const storeCatalogue = {}
    for (const line of arr) {
      const [product, price] = line.split(" : ");
      
      const letter = product[0].toUpperCase();
      const productInfo = {};
      productInfo[product] = price;
      
      if (storeCatalogue.hasOwnProperty(letter)) {
        storeCatalogue[letter] = {...storeCatalogue[letter], ...productInfo}
      } else {
        storeCatalogue[letter] = productInfo;
      }
    }
    
    return storeCatalogue
  }
  //2. sort the object by the letter
  
  function sortByLetter(obj){
    return Object.entries(storeCatalogue).sort((a, b) => a[0].localeCompare(b[0]));
  }
  //3 sort the items in object also alpthabeticaly
  function sortProducts(arr) {
    const obj = {}
    for (const line of arr) {
      const [letter, products] = line;
      const sortedProducts = Object.entries(products).sort((a, b) => a[0].localeCompare(b[0]))
    
      for (const item of sortedProducts) {
        const [product, price] = item;
        const currentObj = {};
        currentObj[product] = Number(price);
        
        obj[letter] = {...obj[letter], ...currentObj};
      }
    }
    
    return obj;
  }
  //4. print Object
  function printProducts(obj) {
    for (const letter in obj) {
      console.log(letter)
      const products = Object.entries(obj[letter]);
      products.forEach(line => console.log(`  ${line[0]}: ${line[1]}`))
    }
  }
}
