function solve(arr) {
  const newArr = [];
  for (const item of arr) {
    const num = Number(item);
    num < 0 ? newArr.unshift(num) : newArr.push(num);
  }
  console.log(newArr.join("\n"))
}
