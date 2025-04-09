function solve(num) {
  let divisorsSum = 0;
  
  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      divisorsSum += i;
    }
  }
  
  if (num === divisorsSum) {
    console.log("We have a perfect number!");
  } else {
    console.log("It's not so perfect.");
  }
}
