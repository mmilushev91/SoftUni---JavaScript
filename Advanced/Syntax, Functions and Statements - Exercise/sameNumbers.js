function solve(num) {
  // const numString = String(num);
  // const uniqueDigits = new Set(numString);

  // console.log(uniqueDigits.size === 1)

  // const numStringArray = numString.split("").reduce((sum, el) => sum + Number(el), 0);
  // console.log(numStringArray)

  const numArr = num.toString().split("");
  console.log(numArr.every((el, _, self) => el === self[0]));
  const sum = numArr.reduce((acc, el) => acc + Number(el), 0);
  console.log(sum);
}

solve(22222);
