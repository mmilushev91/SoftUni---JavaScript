function solve(arr) {
  const [char1, char2, string] = arr;
  
  const start = Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
  const end = Math.max(char1.charCodeAt(0), char2.charCodeAt(0));
  let asciiSum = 0;
  
  for (const char of string) {
    let charAscii = char.charCodeAt(0);
    
    if (charAscii > start && charAscii < end) asciiSum += charAscii;
  }
  
  console.log(asciiSum)
}
