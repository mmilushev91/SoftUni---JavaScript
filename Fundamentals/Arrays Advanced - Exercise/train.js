function solve(array) {
  function addWagon(arr, count) {
    arr.push(Number(count));
  }
  
  function addPassengers(arr, count, maxCap) {
    const arrLength = arr.length;
    
    for (let i = 0; i < arrLength; i++) {
      if (arr[i] + count <= maxCap) {
        arr[i]+= count;
        break;
      }
    }
  }
  const [wagons, maxCapacity, ...commands] = array;
  const wagonsArray = wagons.split(" ").map(el => Number(el));
  const maxCapacityNumber = Number(maxCapacity);
  
  for (const line of commands) {
    
    if (line.split(" ").length > 1) {
      const [command, value] = line.split(" ");
      addWagon(wagonsArray, value);
    } else {
      
      addPassengers(wagonsArray, Number(line), maxCapacityNumber)
    }
  }
  console.log(wagonsArray.join(" "))
}
