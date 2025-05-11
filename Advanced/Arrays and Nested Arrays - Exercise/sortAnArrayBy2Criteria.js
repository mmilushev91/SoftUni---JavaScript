function solve(arr) {
  arr.sort((a, b) => {
    const aLength = a.length;
    const bLength = b.length;
    if (aLength === bLength) {
      return a.localeCompare(b);
    }

    return aLength - bLength;
  });
  console.log(arr.join("\n"));
}

solve(["alpha", "beta", "gamma"]);
solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
