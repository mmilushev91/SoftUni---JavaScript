function solve(obj) {
  const car = {model: obj.model};
  
  const engines = {
    "Small engine": { power: 90, volume: 1800 },
    "Normal engine": { power: 120, volume: 2400 },
    "Monster engine": { power: 200, volume: 3500 },
  }
  
 
  
  for (const eng in engines) {
    const {power, volume} = engines[eng];
    if (power >= obj.power) {
      engine.power = power;
      engine.volume = volume;
      break  
    }
  }
  
  car[engine] = {engine};
  console.log(car)
  
  // const carriage = {
  //   Hatchback: { type: 'hatchback', color: <as required> },
  //   Coupe: { type: 'coupe', color: <as required> }
  // }
  
  const wheelsize = obj.wheelsize;
  
  if (wheelsize % 2 === 0) {
    wheelsize -= 1;
  }
  const wheels = Array(4).fill(wheelsize);

  
  
  
  
//   for
  
// console.log(car)

  
}

// Example usage:
solve({ model: 'Opel Vectra',
  power: 110,
  color: 'grey',
  carriage: 'coupe',
  wheelsize: 17 }

); // center

