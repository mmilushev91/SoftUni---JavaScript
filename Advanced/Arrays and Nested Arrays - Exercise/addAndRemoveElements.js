function solve(commands) {
  let initValue = 1;
  const output = [];
  const commandMapper = {
    add: (num) => output.push(num),
    remove: () => output.pop(),
  };

  for (const command of commands) {
    commandMapper[command](initValue);
    initValue++;
  }

  if (!output.length) {
    console.log("Empty");
    return;
  }

  console.log(output.join("\n"));
}

solve(["add", "add", "add", "add"]);
solve(["add", "add", "remove", "add", "add"]);
