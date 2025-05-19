function solve(area, vol, input) {
    const objects = JSON.parse(input);
    const output = [];
    
    for (const obj of objects) {
      const resultArea = area.call(obj);
      const resultVol = vol.call(obj)
      output.push(
        {
        area: resultArea,
        volume: resultVol,
      })

    }
    return output;
}
