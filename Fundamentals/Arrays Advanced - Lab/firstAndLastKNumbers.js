function solve(arr) {
  const k = arr[0];
  const first = arr.slice(1, 1 + k);
  const last = arr.slice(arr.length - k, arr.length);
  
  console.log(first.join(" "));
  console.log(last.join(" "));
}
