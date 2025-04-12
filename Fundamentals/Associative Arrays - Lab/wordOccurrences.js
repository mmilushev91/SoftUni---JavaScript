function solve(data) {
  const wordCountMap = new Map();

  for (const word of data) {
    if (!wordCountMap.has(word)) {
      wordCountMap.set(word, 0);
    }

    wordCountMap.set(word, wordCountMap.get(word) + 1);
  }

  const sortedWordCountMap = Array.from(wordCountMap.entries()).sort(
    ([wordA, countA], [wordB, countB]) => countB - countA
  );

  for (const [word, times] of sortedWordCountMap) {
    console.log(`${word} -> ${times} times`);
  }
}

solve([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
