function solve(data) {
  const calorieObj = {};
  const dataLength = data.length;
  
  for (let i = 0; i < dataLength; i+= 2) {
    calorieObj[data[i]] = Number(data[i + 1]);
  }
  
  console.log(calorieObj)
}
