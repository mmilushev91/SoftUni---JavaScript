function solve(arr) {
  const sum = arr.reduce((sum, el) => {
    const num = Number(el);
    
    if (num % 2 === 0) {
      return sum + num;
    }
    
    return sum;
    
    }, 0)
  
  console.log(sum);
}
