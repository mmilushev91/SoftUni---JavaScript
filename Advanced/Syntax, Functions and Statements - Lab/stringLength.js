function solve(...strings) {
  const totalLength = strings.reduce((sum, string) => sum + string.length, 0);
  const avgLength = Math.floor(totalLength / strings.length);
  
  console.log(totalLength);
  console.log(avgLength);
}
