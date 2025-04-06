function solve(arr) {
  let num = 1;
  const outputArr = [];

  for (command of arr) {
    if (command === "add") {
      outputArr.push(num);
    } else {
      outputArr.pop();
    }
    num++;
  }

  console.log(outputArr.length > 0 ? outputArr.join(" ") : "Empty");
}

solve(["add", "add", "add", "add"]);
solve(["add", "add", "remove", "add", "add"]);
solve(["remove", "remove", "remove"]);
