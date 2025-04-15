function solve(data) {
  const materials = {};
  const dataLength = data.length;
  
  for (let i = 0; i < dataLength - 1; i+=2) {
    const key = data[i];
    const value = Number(data[i+1]);
    
    if (!materials.hasOwnProperty(key)) {
      materials[key] = 0;
    }
    
    materials[key] += value;
  }
  
  for (const key in materials) {
    console.log(`${key} -> ${materials[key]}`)
  }
}
