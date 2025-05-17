function solve(arr) {
  console.log(
    [arr.shift(), arr.pop()].reduce((sum, num) => sum + Number(num), 0)
  );
}
