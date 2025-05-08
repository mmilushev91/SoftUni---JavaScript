function solve(speed, place) {
  const limits = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  }
  const limit = limits[place];
  if (speed <= limit) {
    console.log(`Driving ${speed} km/h in a ${limit} zone`)
  } else {
    const overSpeed = speed - limit;
    let overSpeedType;
    
    if (overSpeed <= 20) {
      overSpeedType = "speeding";
    } else if (overSpeed <= 40) {
      overSpeedType = "excessive speeding";
    } else {
      overSpeedType = "reckless driving";
    }
    
    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${limit} - ${overSpeedType}`)
  }
  
}
