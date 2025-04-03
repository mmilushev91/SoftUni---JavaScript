function solve(arr1, arr2) {
  const commonElements = arr1.filter((el) => arr2.includes(el));
  console.log(commonElements.join("\n"));
}
