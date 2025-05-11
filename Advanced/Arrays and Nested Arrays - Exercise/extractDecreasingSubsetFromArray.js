function solve(arr) {
  const nonDecreasingSubset = arr.reduce((acc, el, i) => {
    if (i === 0 || el >= acc[acc.length - 1]) {
      acc.push(el);
    }
    return acc;
  }, []);
  return nonDecreasingSubset;
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
