function solve(obj) {
  const car = {model: obj.model};
  car.engine = pickEngine(obj.power);
  car.carriage = pickCarriage(obj.carriage, obj.color);
  car.wheels = calcWheelsize(obj.wheelsize);
  return car;
  
  
  //determines engine and volume and return obj with those values
  function pickEngine(Objpower){
    //1. Build object with power and volume types
    const engines = {
      "Small engine": { power: 90, volume: 1800 },
      "Normal engine": { power: 120, volume: 2400 },
      "Monster engine": { power: 200, volume: 3500 },
    }
    //2. Loop through the object to find engine with power >= to inputPower
    
    for (const engine in engines) {
      const {power, volume} = engines[engine];
      
      if (power >= Objpower) {
        //3. return object with engine and power according to the inputPower
        return {
          power,
          volume
        }
      }
    }
  }
  
  //determines carriage and color and return obj with those values
  function pickCarriage(carriage, color) {
    return {
      type: carriage,
      color
    }
  }
  
  //calc wheelsize and return array with four wheels
  function calcWheelsize(wheels) {
    if (wheels % 2 === 0) {
      wheels--;
    }
    
    return Array(4).fill(wheels);
  }
  
}
