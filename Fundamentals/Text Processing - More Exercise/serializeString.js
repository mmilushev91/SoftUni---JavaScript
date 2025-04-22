function solve(arr) {
  const [word] = arr;
  const wordLength = word.length;
  const letterIndexes = {};
  
  for (let i = 0; i < wordLength; i++) {
    const currentLetter = word[i]
    
    if (!letterIndexes.hasOwnProperty(currentLetter)) {
      letterIndexes[currentLetter] = [];
     
    }   
    letterIndexes[currentLetter].push(i);
  }
  
  for (const key in letterIndexes) {
    console.log(`${key}:${letterIndexes[key].join("/")}`);
  }
}
