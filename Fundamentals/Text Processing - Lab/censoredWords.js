function solve(text, word) {
  let censoredWord = "";
  const wordLength = word.length;
  
  for (let i = 0; i < wordLength; i++) {
    censoredWord += "*";
  }
  
  const censoredText = text.replaceAll(word, censoredWord);
  console.log(censoredText)
}
