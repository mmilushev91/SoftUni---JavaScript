function solve(array) {
  let newArray = []
  let counter = 0;
  
  function findBiggestNumber() {
    let biggestNumber = Number.MIN_VALUE;
    let biggestNumberIndex = 0;
    
    for (let index = 0; index < array.length; index++) {
      
      if (array[index] > biggestNumber) {
        biggestNumber = array[index];
        biggestNumberIndex = index;
      }
    }
    newArray.push(array.splice(biggestNumberIndex, 1)[0]);
  }
  function findSmallestNumber() {
    let smallestNumber = Number.MAX_VALUE;
    let smallestNumberIndex = 0;
    
    for (let index = 0; index < array.length; index++) {
      
      if (array[index] < smallestNumber) {
        smallestNumber = array[index];
        smallestNumberIndex = index;
      }
    }
    newArray.push(array.splice(smallestNumberIndex, 1)[0]);
    
  }
  
  while (array.length > 0) {
    
    if (counter % 2 == 0) {
      findBiggestNumber();
      
    } else {
      findSmallestNumber();
    }
    counter++;
  }
  console.log(newArray.join(" "))
}
