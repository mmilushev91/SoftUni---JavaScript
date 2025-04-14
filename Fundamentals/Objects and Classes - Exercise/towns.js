function solve(data) {
  for (const line of data) {
    const [town, latitude, longitude] = line.split(" | ");
    console.log({town: town, 
                  latitude: `${Number(latitude).toFixed(2)}`,
                  longitude: `${Number(longitude).toFixed(2)}`
    });
  }
}
