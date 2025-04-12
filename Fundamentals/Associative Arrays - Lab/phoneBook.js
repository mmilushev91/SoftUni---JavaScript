function solve(arr) {
  const phoneBook = {};

  for (const item of arr) {
    const [name, number] = item.split(" ");
    phoneBook[name] = number;
  }

  for (const name in phoneBook) {
    console.log(`${name} -> ${phoneBook[name]}`);
  }
}

solve([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
