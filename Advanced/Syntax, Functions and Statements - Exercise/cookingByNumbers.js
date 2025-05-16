function solve(...data) {
  const [number, ...commands] = data;
  let convertedNumber = Number(number);

  const operations = {
    chop: () => convertedNumber / 2,
    dice: () => Math.sqrt(convertedNumber),
    spice: () => convertedNumber + 1,
    bake: () => convertedNumber * 3,
    fillet: () => convertedNumber * 0.8,
  };

  for (const command of commands) {
    convertedNumber = operations[command]();

    console.log(convertedNumber);
  }
}

solve("9", "dice", "spice", "chop", "bake", "fillet");
