function solve(array, bomb) {
  
  let bombNumber = bomb[0];
  let bombPower = bomb[1];
  
  while (array.includes(bombNumber)) {
    let bombNumberIndex = array.indexOf(bomb[0]);
    let startIndex = bombNumberIndex - bombPower;
    
    if (startIndex < 0) {
      startIndex = 0;
    }
    
    let endIndex = bombNumberIndex + bombPower;
    
    if (endIndex >= array.length) {
      endIndex = array.length - 1;
    }
    
    for (let pos = startIndex; pos <= endIndex; pos++) {
      array.splice(startIndex, 1)
    }
    
  }
  
  let result = 0;
  
  for (item of array) {
    result += item
  }
  
  console.log(result)
  
}
