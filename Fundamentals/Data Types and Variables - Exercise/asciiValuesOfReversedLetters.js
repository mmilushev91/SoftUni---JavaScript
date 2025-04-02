function solve(...letters) {
  const reversedLetters = letters.reverse();
  const firstLine = reversedLetters.join("");
  const secondLine = reversedLetters.reduce((line, el) => line + el.charCodeAt(0) + " ", "");
  
  console.log(`${firstLine}\n${secondLine}`);
}
