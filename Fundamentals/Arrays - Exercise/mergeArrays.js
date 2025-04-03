function solve(arr1, arr2) {
  const outputArray = [];
  const forInterval = arr1.length;
  
  for (let i = 0; i < forInterval; i++) {
    let itemToAdd = arr1[i] + arr2[i];
    
    if (i % 2 === 0) {
      itemToAdd = Number(arr1[i]) + Number(arr2[i]);
    }
    outputArray.push(itemToAdd);
  }
  console.log(outputArray.join(" - "));
}
