function solve(arr) {
  const concretePerFoot = 195;
  const cubicMeterPrice = 1900;
  const dailyConcreteArr = [];
  let finalCost = 0;
  
  while (arr.length > 0) {
    while (arr.includes(30)) {
      const thirtyIndex = arr.indexOf(30);
      
      arr.splice(thirtyIndex, 1)
    }
    const dailyConcrete = arr.length * concretePerFoot;
    
    if (!dailyConcrete) {
      break;
    }

    dailyConcreteArr.push(dailyConcrete);
    
    finalCost += dailyConcrete * cubicMeterPrice;
    
    arr = arr.map(el => el += 1);
  } 

  console.log(dailyConcreteArr.join(", "))
  console.log(finalCost + " pesos")
}
