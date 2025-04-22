function solve(data) {
  const output = [];
  
  for (const item of data) {
    if (item === "end") break;
    
    const [char, indexes] = item.split(":");
    
    const NumIndexes = indexes.split("/").map(idx => Number(idx));
    
    for (const idx of NumIndexes) {
      output[idx] = char;
    }
  }
  
  console.log(output.join(""));
}
