function solve(...args) {
  const summary = {};

  for (const arg of args) {
    const argType = typeof arg;
    if (!summary.hasOwnProperty(argType)) {
      summary[argType] = 0;
    }

    summary[argType]++;
    console.log(`${argType}: ${arg}`);
  }

  const sortedSummary = Object.entries(summary).sort((a, b) => b[1] - a[1]);

  for (const [key, value] of sortedSummary) {
    console.log(`${key} = ${value}`);
  }
}
// solve("cat", 42, function () {
//   console.log("Hello world!");
// });

solve({ name: "bob" }, 3.333, 9.999);
