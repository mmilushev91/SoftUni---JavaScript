function solve(data) {
  const [wordsToMatch, ...words] = data;
  const wordsToMatchAssArr = {};

  wordsToMatch.split(" ").forEach((el) => (wordsToMatchAssArr[el] = 0));

  for (const word of words) {
    if (wordsToMatchAssArr.hasOwnProperty(word)) {
      wordsToMatchAssArr[word] += 1;
    }
  }

  const sortedWordsToMatchAssArr = Object.entries(wordsToMatchAssArr).sort(
    ([wordA, countA], [wordB, countB]) => countB - countA
  );

  for (const [word, count] of sortedWordsToMatchAssArr) {
    console.log(`${word} - ${count}`);
  }
}

solve([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);

solve([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
