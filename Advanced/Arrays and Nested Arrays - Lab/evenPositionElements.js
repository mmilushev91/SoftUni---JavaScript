function solve(array) {
  // const arrayLength = array.length;
  // let result = "";
  // for (let i = 0; i < arrayLength; i += 2) result += array[i] + " ";
  // console.log(result);
  console.log(array.filter((_, i) => i % 2 === 0).join(" "));
}

solve(["20", "30", "40", "50", "60"]);
