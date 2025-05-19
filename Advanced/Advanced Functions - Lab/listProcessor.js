function solution(commands) {
  const strings = [];
  
  const operations = {
    add(string) {
      strings.push(string);
    },
    remove(string) {
      while (strings.includes(string)) {
        const stringIndex = strings.indexOf(string);
        strings.splice(stringIndex, 1);
      }
    },
    
    print() {
      console.log(strings.join());
    }
  }
  
  for (const line of commands) {
    const [command, string] = line.split(" ");
    operations[command](string);
  }
}
