function getFibonator() {
  const numbers = [];

  return function () {
    let lastIndex = numbers.length - 1;

    if (!numbers.length) {
      numbers.push(1);
    } else if (!lastIndex) {
      numbers.push(numbers[lastIndex]);
    } else {
      numbers.push(numbers[lastIndex] + numbers[lastIndex - 1]);
    }

    return numbers[numbers.length - 1];
  };
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
