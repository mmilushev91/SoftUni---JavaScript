function solve(arr, rot) {
  for (let i = 0; i < rot; i++) {
    arr.unshift(arr.pop());
  }

  console.log(arr.join(" "));
}

solve(["Banana", "Orange", "Coconut", "Apple"], 15);
