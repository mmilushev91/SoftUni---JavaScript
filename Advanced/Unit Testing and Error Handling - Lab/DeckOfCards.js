function printDeckOfCards(cards) {
  const output = [];
  for (const card of cards) {
    let face, suit;
    
    if (card.length > 2) {
      face = card.slice(0, 2);
      suit = card[2];
    } else {
      face = card[0];
      suit = card[1];
    }
    
    const createdCard = createCard(face, suit);
    
    if (!createdCard) {
      console.log(`Invalid card: ${card}`);
      return -1;
    }
    
    output.push(createdCard);
    
  }
  console.log(output.join(" "));
  
  function createCard(face, suit){
    const validFaces = ['2', '3', '4', '5', '6', '7', '8','9', '10', 'J', 'Q', 'K', 'A'];
    const validStuits = ['S', 'H', 'D', 'C'];
    
    if (!validFaces.includes(face) || !validStuits.includes(suit)) {
      return false;
    }
    
    return {
      suits: {
        S: '\u2660',
        H: '\u2665',
        D: '\u2666',
        C: '\u2663',
      },
      
      toString() {
        return `${face}${this.suits[suit]}`;
      }
    }     
  }
    
}
