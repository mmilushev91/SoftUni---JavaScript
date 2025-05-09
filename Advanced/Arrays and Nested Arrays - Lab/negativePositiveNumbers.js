function solve(arr) {
  const newArray = [];
  
  for (const item of arr) {
    if (item < 0) {
      newArray.unshift(item);
    } else {
      newArray.push(item);
    }
  }
  newArray.forEach(num => console.log(num))
}
