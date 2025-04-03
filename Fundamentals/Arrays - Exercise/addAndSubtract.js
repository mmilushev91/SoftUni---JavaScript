function solve(arr) {
  let arrSum = newArrSum = 0;
  const newArr = arr.map((el, i) => {
    
    arrSum += el
    el % 2 === 0 ? el += i : el -= i;
    newArrSum += el;
    
    return el;
  });
  
  console.log(newArr);
  console.log(arrSum);
  console.log(newArrSum)
}
