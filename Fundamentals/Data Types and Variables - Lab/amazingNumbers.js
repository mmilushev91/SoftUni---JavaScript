function solve(num) {
  const digitSum = String(String(num).split("").reduce((sum, el) => sum + Number(el), 0));
  console.log(`${num} Amazing? ${digitSum.includes("9")? "True" : "False"}`);
}
