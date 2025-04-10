function solve(n, k) {
  const newArr = [1];
  for (let i = 1; i < n; i++) {
    const currentEl = newArr.slice(-k).reduce((acc, el) => acc + el, 0);
    newArr.push(currentEl);
  }
  console.log(newArr.join(" "));
}
