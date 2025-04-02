function gladiatorExpenses(lostFightsCount, HelmetPrice, swordPrice, shieldPrice, armorPrice) {
  let expenses = 0;
  let shieldCounter = 0
  
  for (let round = 1; round <= lostFightsCount; round++) {
    
    if (round % 2 === 0) {
      expenses += HelmetPrice;
    }
    
    if (round % 3 === 0) {
      expenses += swordPrice;
    }
    
    if (round % 2 ==0 && round % 3 === 0) {
      expenses += shieldPrice;
      shieldCounter++;
      
      if (shieldCounter === 2) {
        
        shieldCounter = 0;
        expenses += armorPrice;
      }
    }
    
  }
  
  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}
