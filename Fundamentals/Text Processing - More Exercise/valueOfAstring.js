function solve(arr) {
  const isUpper = (char) => {
    const pattern = /[A-Z]/
    return pattern.test(char);
  }
  
  const isLower = (char) => {
    const pattern = /[a-z]/
    return pattern.test(char);
  }
  
  const [string, stringCase] = arr;
  
  const operation = {
    LOWERCASE() {
      return string.split("").filter(char => {
        if (isLower(char)) return char
        }
      ).reduce((sum, char) => sum + char.charCodeAt(0), 0);
    },
    UPPERCASE() {
      return string.split("").filter(char => {
        if (isUpper(char)) return char;
      }).reduce((sum, char) => sum + char.charCodeAt(0), 0);
    }
  }
  const charSum = operation[stringCase]();
  console.log(`The total sum is: ${charSum}`)
}
