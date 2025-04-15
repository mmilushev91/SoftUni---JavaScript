function solve(data) {
  function isDigit(digit) {
    return /^\d+$/.test(digit);
  }
  const scores = {};
  const cardMultiplier = {
    S: 4,
    H: 3,
    D: 2,
    C: 1,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  }
  
  for (const line of data) {
    const [name, cards] = line.split(": ");
    
    const cardsArr = cards.split(", ");
    
    if (!scores.hasOwnProperty(name)) {
      scores[name] = [];
    }
    
    scores[name].push(...cardsArr)
  }

  for (const name in scores) {
    const uniqueCards = [...new Set(scores[name])]
    const score = uniqueCards.reduce((sum, el) => {
      const elArr = el.split("");
      
      if (elArr.length === 2) {
        const [card, multiplier] = elArr;
        
        if (isDigit(card)) {
          return sum + Number(card) * cardMultiplier[multiplier];
          
        }
        else{
          return sum + cardMultiplier[card] * cardMultiplier[multiplier]
        }
        
      }   
      else {
        const multiplier = elArr[elArr.length - 1];
        return sum + 10 * cardMultiplier[multiplier];
      }
      
    }, 0);
    
    console.log(`${name}: ${score}`)
  }
}
