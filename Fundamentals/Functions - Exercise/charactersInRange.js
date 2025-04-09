function solve(char1, char2) {
  const char1Ascii = char1.charCodeAt(0);
  const char2Ascii = char2.charCodeAt(0);
  
  const start = Math.min(char1Ascii, char2Ascii);
  const end = Math.max(char1Ascii, char2Ascii);
  const charsBetween = [];
  
  for (let i = start + 1; i < end; i++) {
    charsBetween.push(String.fromCharCode(i));
  }
  
  console.log(charsBetween.join(" "));
}
