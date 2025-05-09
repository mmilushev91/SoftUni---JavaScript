function solve(steps, footprintLength, speed) {
  const distanceM = steps * footprintLength;
  const distanceKm = distanceM / 1000;
  const hoursNeeded = distanceKm / speed;
  const secondsNeeded = hoursNeeded * 3600;
  let seconds = Math.round(secondsNeeded % 60);
  let minutes = Math.floor(secondsNeeded / 60) + Math.floor(distanceM / 500);
  let hours = Math.floor(minutes / 60);

  if (seconds < 10) {
    seconds = `0${seconds}`
  }
  if (minutes < 10) {
    minutes = `0${minutes}`
  }
  
  if (hours < 10) {
    hours = `0${hours}`;
  }
  console.log(`${hours}:${minutes}:${seconds}`) 
}
