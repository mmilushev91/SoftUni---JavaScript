function solve(numbers) {
  let odd = even = 0;
  
  numbers.forEach((num) => {
    num % 2 === 0 ? even += num : odd += num;
  });
  
  console.log(even - odd)
}
