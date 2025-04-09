function solve(num) {
  let evenSum = oddSum = 0;
  String(num).split("").forEach(digit => Number(digit) % 2 === 0 ? evenSum += Number(digit) : oddSum += Number(digit));
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
