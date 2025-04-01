function solve(base, increment) {
  
  let totalStoneRequired = 0
  let stepCounter = 0;
  let totalMarbelRequired = 0;
  let totalLapisLazuliRequired = 0;
  let goldRequired = 0;
  
  for (let step = base; step >= 1; step -= 2) {
    stepCounter++;
    
    if (step > 2) {
      
      let reducedBase = step - 2;
      let currentStepStoneRequired = reducedBase ** 2 * increment;
      totalStoneRequired += currentStepStoneRequired;
      
      if (stepCounter % 5 === 0) {
        let lapisLazuliRequired = ((step * 4) - 4) * increment;
        totalLapisLazuliRequired += lapisLazuliRequired;
        
      } else {
        let marbelRequired = ((step * 4) - 4) * increment;
        totalMarbelRequired += marbelRequired;
      }
    } else {
      goldRequired = step ** 2 * increment;
    }
  }
  
  let pyramidHeight = Math.floor(stepCounter * increment);
  
  console.log(`Stone required: ${Math.ceil(totalStoneRequired)}`);
  console.log(`Marble required: ${Math.ceil(totalMarbelRequired)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(totalLapisLazuliRequired)}`);
  console.log(`Gold required: ${Math.ceil(goldRequired)}`);
  console.log(`Final pyramid height: ${pyramidHeight}`);
}
