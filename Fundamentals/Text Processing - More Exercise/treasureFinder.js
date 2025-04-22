function solve(data) {
  
  const matchItem = function(str, regex) {
    const match = str.match(regex)
    return match[1]
  }

  const patterns = {
    type: /\&([^\[\]]+)\&/,
    coordinates: /\<([^\[\]]+)\>/,
  }
  
  const [keySeq, ...strings] = data;
  const keySeqIndexes = keySeq.split(" ").map(idx => Number(idx));
  const keySeqIndexesLength = keySeqIndexes.length;
  
  for (const string of strings) {
    if (string === "find") break;
    
    let keyIdx = 0;
    let newStringArr = [];
    for (const char of string) {
      if (keyIdx === keySeqIndexesLength) {
        keyIdx = 0;
      }
      
      newStringArr.push(String.fromCharCode(char.charCodeAt(0) - keySeqIndexes[keyIdx]));
      keyIdx++;
    }
    
    const newString = newStringArr.join("");
    const type = matchItem(newString, patterns.type);
    const coordinates = matchItem(newString, patterns.coordinates);
    
    console.log(`Found ${type} at ${coordinates}`)
    
    
  }
}
