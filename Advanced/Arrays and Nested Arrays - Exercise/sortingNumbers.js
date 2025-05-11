function solve(arr) {
  arr.sort((a, b) => a - b);
  const arrLength = arr.length;
  const mid = Math.ceil(arrLength / 2);
  const last = arrLength - 1;
  const newArr = [];

  for (let i = 0; i < mid; i++) {
    newArr.push(arr[i]);

    if (newArr.length < arrLength) {
      newArr.push(arr[last - i]);
    }
  }
  return newArr;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 56]);
