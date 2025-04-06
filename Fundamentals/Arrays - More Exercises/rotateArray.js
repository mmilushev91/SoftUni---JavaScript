function solve(arr) {
  const arrlastIndex = arr.length - 1;
  const rotations = Number(arr[arrlastIndex]);
  const numbers = arr.slice(0, arrlastIndex);

  for (let i = 0; i < rotations; i++) {
    numbers.unshift(numbers.pop());
  }
  console.log(numbers.join(" "));
}

solve(["1", "2", "3", "4", "2"]);
solve(["Banana", "Orange", "Coconut", "Apple", "15"]);
