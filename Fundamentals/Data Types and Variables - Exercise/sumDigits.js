function solve(num) {
  console.log(String(num).split("").reduce((sum, el) => sum + Number(el), 0));
}
