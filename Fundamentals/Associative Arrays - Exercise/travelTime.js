function solve(data) {
  const travelInfo = {};
  
  for (const line of data) {
    const [country, city, cost] = line.split(" > ");
    const numCost = Number(cost);
    
    const cityObject = {};
    cityObject[city] = numCost;
    
    if (travelInfo.hasOwnProperty(country)) {
      
      if (travelInfo[country].hasOwnProperty(city)) {
        if (travelInfo[country][city] > numCost) {
          travelInfo[country][city] = numCost;
        }
      } else {
        
        travelInfo[country][city] = numCost;
      }
    } else {
      travelInfo[country] = cityObject;
    }
    
  }
  const sortedBycountry = Object.entries(travelInfo).sort((a, b) => a[0].localeCompare(b[0]));
  
  for (const line of sortedBycountry) {
    const [country, cities] = line;
    let output = ` ${country} -> `
    const sortedCities = Object.entries(cities).sort((a, b) => a[0].localeCompare(b[0]))
    for (const item of sortedCities) {
      output += `${item.join(" -> ")} `;
      
    }
    
    console.log(output)
  }
}
