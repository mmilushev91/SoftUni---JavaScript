function solve(arr, order) {
  const sorting = {
    asc: (a, b) => a - b,
    desc: (a, b) => b - a,
  };

  console.log(arr.sort(sorting[order]));
}

solve([14, 7, 17, 6, 8], "asc");
