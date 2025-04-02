function solve(first, char, last) {
  first = first.replace("_", char);
  console.log(first === last ? "Matched" : "Not Matched")
}
