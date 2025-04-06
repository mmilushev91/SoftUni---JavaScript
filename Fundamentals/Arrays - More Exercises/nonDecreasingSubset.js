function solve(arr) {
  let biggestEl = arr[0];
  const nonDescreasingSubset = [];

  for (const item of arr) {
    if (item >= biggestEl) {
      biggestEl = item;
      nonDescreasingSubset.push(item);
    }
  }

  console.log(nonDescreasingSubset.join(" "));
}

solve([1, 2, 3, 4]);
solve([20, 3, 2, 20, 15, 20, 6, 1]);
solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
