function solve(data) {
  const townPopulation = {};
  
  for (const line of data) {
    const [city, population] = line.split(" <-> ");
    
    if (!townPopulation.hasOwnProperty(city)) {
      townPopulation[city] = 0;
    }
    
    townPopulation[city] += Number(population);
  }
  
  for (const [city, population] of Object.entries(townPopulation)) {
    console.log(`${city} : ${population}`)
  }
}
