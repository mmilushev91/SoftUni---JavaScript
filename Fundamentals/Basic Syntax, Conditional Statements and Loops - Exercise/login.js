function solve(arr) {
  const [username, ...restArr] = arr;
  const correctPassword = username.split("").reverse().join("");
  
  let index = 0;
  let ouput = "blocked!";
  
  while (index <= 3) {
    if (restArr[index] !== correctPassword && index < 3) {
      console.log("Incorrect password. Try again.");
      
    } else if (restArr[index] === correctPassword ){
      ouput = "logged in.";
      break
    }
    index++;
  }
  console.log(`User ${username} ${ouput}`)
}
