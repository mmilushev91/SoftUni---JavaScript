function solve(arr, start, end) {
  if (!Array.isArray(arr)) {
    return NaN;
  }
  
  if (start < 0) {
    start = 0;
  }
  
  if (end >= arr.length) {
    end = arr.length - 1;
  }
  
  const arrPart = arr.slice(start, end + 1);
  let sum = 0;
  
  for (const el of arrPart) {
    
    if (typeof el !== "number") {
      return NaN;
    }
    
    sum += el;
  }
  
  return sum;
}
