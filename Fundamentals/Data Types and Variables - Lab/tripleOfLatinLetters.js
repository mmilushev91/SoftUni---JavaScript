function triplesOFLatinLetters(n) {
  let step = Number(n);
  let startLetter = "a"
  let startAsci = startLetter.charCodeAt(0);
  let endAsci = startLetter.charCodeAt(0) + step;
  
  for (let char1 = startAsci; char1 < endAsci; char1++) {
    for (let char2 = startAsci; char2 < endAsci; char2++) {
      for (let char3 = startAsci; char3 < endAsci; char3++) {
        console.log(String.fromCharCode(char1, char2, char3));
      }
    }
  }
}
