function solve(num, prec) {
  
  if (prec > 15) {
    prec = 15;
  }
  console.log(parseFloat(num.toFixed(prec)))
}
