function solve(text, word) {
  const wordLength = word.length;
  const textArr = text.split(" ");
  let wordOccurences = 0;
  
  for (const item of textArr) {
    const pureItem = item.slice(0, wordLength);
    
    pureItem === word ? wordOccurences += 1 : wordOccurences += 0;
  }
  
  console.log(wordOccurences)
}
