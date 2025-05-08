function solve(arr) {
  let result1 = 0;
  let result2 = 0;
  let result3 = "";

  for (const item of arr) {
    result1 += item;
    result2 += 1 / item;
    result3 += item;
  }

  console.log(result1);
  console.log(result2);
  console.log(result3);
}
