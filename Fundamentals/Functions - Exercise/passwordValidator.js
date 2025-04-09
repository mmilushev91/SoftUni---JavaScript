function solve(password) {
  function isAlphanumeric(str) {
    const regex = /^[a-z0-9]+$/i;
    return regex.test(str);
  }
  function isNumber(char) {
    return !isNaN(char);
}
  
  function checkValidLen() {
    const passwordLength = password.length;
    
    if (passwordLength < 6 || passwordLength > 10) {
      console.log("Password must be between 6 and 10 characters");
      return false;
    }
    
    return true;
  }
  function checkAlphanumeric() {
    if (!isAlphanumeric(password)) {
      console.log("Password must consist only of letters and digits");
      return false;
    }
    
    return true;
  }
  
  function checkMinDigits() {
    let digits = 0;
    for (const char of password) {
      if (!isNaN(char)) {
        digits++;
        if (digits === 2) {
          return true;
        }
      }
    }
    
    console.log("Password must have at least 2 digits");
    
    return false;
  }
  
  const validLen = checkValidLen();
  const alphanumeric = checkAlphanumeric();
  const minDigits = checkMinDigits();
  
  if (validLen && alphanumeric && minDigits) {
    console.log("Password is valid");
  }

}
