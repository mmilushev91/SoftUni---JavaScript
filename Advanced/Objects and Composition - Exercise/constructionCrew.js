function solve(workerObj) {
  if (workerObj.dizziness) {
    const water = (workerObj.weight * workerObj.experience) * 0.1;
    workerObj.levelOfHydrated += water;
    workerObj.dizziness = false;
  }
  
  return workerObj;
}
