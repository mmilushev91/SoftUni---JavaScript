function solve(array, manipulations) {
  let start = 0;
  let end = manipulations[0];
  let itemsToRemove = manipulations[1];
  let searchedNumber = manipulations[2];
  let searchedNumberOcuriences = 0;
  
  let manipulatedArray = array.slice(start, end);
  
  for (let counter = 1; counter <= itemsToRemove; counter ++) {
    manipulatedArray.splice(0, 1);
  }
  
  for (let item of manipulatedArray) {
    if (item == searchedNumber) {
      searchedNumberOcuriences += 1;
    }
  }
  
  console.log(`Number ${searchedNumber} occurs ${searchedNumberOcuriences} times.`);
  
}
