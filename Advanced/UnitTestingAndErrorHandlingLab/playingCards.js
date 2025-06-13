function solve(face, suit) {
  const validFaces = ['2', '3', '4', '5', '6', '7', '8','9', '10', 'J', 'Q', 'K', 'A'];
  const validStuits = ['S', 'H', 'D', 'C'];
  
  if (!validFaces.includes(face) || !validStuits.includes(suit)) {
    throw new Error("Error");
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
