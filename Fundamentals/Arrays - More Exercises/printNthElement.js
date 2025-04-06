function solve(arr) {
  const arrlastIndex = arr.length - 1;
  const step = Number(arr[arrlastIndex]);
  const numbers = arr.slice(0, arrlastIndex);
  const numbersLength = numbers.length;
  const nthElements = [];

  for (let i = 0; i < numbersLength; i += step) {
    nthElements.push(numbers[i]);
  }

  console.log(nthElements.join(" "));
}

solve(["5", "20", "31", "4", "20", "2"]);
solve(["dsa", "asd", "test", "test", "2"]);
solve(["1", "2", "3", "4", "5", "6"]);
