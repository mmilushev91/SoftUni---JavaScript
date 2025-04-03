function solve(arr1, arr2) {
  const arrLength = arr1.length;
  let arrSum = 0;
  
  for (let i = 0; i < arrLength; i++) {
    arrSum += Number(arr1[i]);
    
    if (arr1[i] !== arr2[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      return;
    }
  }
  console.log(`Arrays are identical. Sum: ${arrSum}`);
}
