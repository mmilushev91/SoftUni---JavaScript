function solve(array) {
  const arrayLength = array.length;
  let result = "";
  
  for (let i = 0; i < arrayLength; i += 2) result += array[i] + " ";
  
  console.log(result);
}
