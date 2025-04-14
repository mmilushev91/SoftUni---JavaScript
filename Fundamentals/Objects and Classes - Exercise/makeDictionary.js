function solve(data) {
  const terms = [];
  
  for (const jsonObj of data) {
    const obj = JSON.parse(jsonObj);
    const objKey = Object.keys(obj)[0];
    let breakInnerLoop = false;
    
    for (const term of terms) {
      if (term[objKey]) {
        term[objKey] = obj[objKey];
        breakInnerLoop = true;
        break;
      }
    }
    
    if (!breakInnerLoop) {
      terms.push(obj);
    }
  }
  
  const sortedTerms = terms.sort((a, b) => {
    const aKey = Object.keys(a)[0];
    const bKey = Object.keys(b)[0];
    
    return aKey.localeCompare(bKey);
  })
  
  for (const term of sortedTerms) {
    const termKey = Object.keys(term)[0];
    const definition = term[termKey];
    console.log(`Term: ${termKey} => Definition: ${definition}`)
  }
 
}
