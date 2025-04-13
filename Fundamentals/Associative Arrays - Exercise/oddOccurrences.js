function solve(data) {
  const words = data.split(" ");
  const wordsCountMap = new Map();
  const wordsOddCount = [];

  for (const word of words) {
    const wordLowerCase = word.toLowerCase();

    if (!wordsCountMap.has(wordLowerCase)) {
      wordsCountMap.set(wordLowerCase, 0);
    }

    let currentValue = wordsCountMap.get(wordLowerCase);
    wordsCountMap.set(wordLowerCase, currentValue + 1);
  }

  for (const [word, count] of wordsCountMap) {
    if (count % 2 !== 0) {
      wordsOddCount.push(word);
    }
  }

  console.log(wordsOddCount.join(" "));
}

solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
