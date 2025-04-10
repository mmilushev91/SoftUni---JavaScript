function solve(arr) {
  const output = arr.filter((el, i) => i % 2 !== 0).map(el => el * 2).reverse();
  console.log(output.join(" "));
}
