function solve(arr, rot) {
  for (let i = 0; i < rot; i++) {
    arr.push(arr.shift());
  }
  console.log(arr.join(" "));
}
