function solve(arr) {
  while (arr.length > 1) {
    const newArray = [];
    for (let i = 0; i < arr.length - 1; i++) {
      newArray[i] = arr[i] + arr[i+1];
    }
    arr = newArray;
  }
  console.log(...arr)
}
