function solve(...data) {
  const [number, ...commands] = data;
  let convertedNumber = Number(number);
  
  const operations = {
    chop: () => convertedNumber / 2,
    dice: () => Math.sqrt(convertedNumber),
    spice: () => convertedNumber + 1,
    bake: () => convertedNumber * 3,
    fillet: () => convertedNumber * 0.80,
  }
  
  for (const command of commands) {
    convertedNumber = Math.floor(operations[command]());
    
    console.log(convertedNumber);
    
  }
}
