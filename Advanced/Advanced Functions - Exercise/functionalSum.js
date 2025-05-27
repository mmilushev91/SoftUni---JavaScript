function add(num = 0) {
  let sum = num;
  
  function accumulator(next) {
    sum += next;
    return accumulator
  }
  
  accumulator.valueOf = () => sum;
  accumulator.toString = () => String(sum);
  
  return accumulator
  
}
